class Stereo < ApplicationRecord
  has_many :stereo_components, dependent: :destroy
  has_many :components, through: :stereo_components

  def component_attributes=(attributes)
    attributes.each do |component_hash|
      if !component_hash[:name].empty?
        if Component.find_by_name(component_hash[:name])
          c = Component.find_by_name(component_hash[:name])
          self.stereo_components.build(component_id: c.id)
          self.save
        else
          self.components.build(component_hash)
          self.save
        end
      end
    end
  end

  def handle_entry(compvalues)
    if compvalues[:name] == ""
      self.kill_association(compvalues)
    else
      if c = Component.find_by(name: compvalues[:name])
        c.update(price: compvalues[:price])
        self.check_replace_or_add_association(c)
      else
        c = Component.create(name: compvalues[:name], brand: compvalues[:brand], price: compvalues[:price], category: compvalues[:category])
        self.check_replace_or_add_association(c)
      end
    end
  end

  def kill_association(compvalues)
    binding.pry
    self.stereo_components.find{|sc| sc.component.category == compvalues[:category]}.destroy
    self.save
  end

  def check_replace_or_add_association(compvalues)
    if self.stereo_components.find{|sc| sc.component_id == compvalues[:id]}
    else
      if s = self.stereo_components.find{|sc| sc.component.category == compvalues[:category]}
        s.update(component_id: compvalues[:id])
        self.save
      else

        self.components << compvalues
        self.save
      end
    end
  end

  # if stereo has compentry
  #     then were good! no more needed
  # else
  #     if stereo has a comp with the same category
  #       then update that stereo_component with compentry.id
  #     else
  #       push compentry onto stereo's components

end
