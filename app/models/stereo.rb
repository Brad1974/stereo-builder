class Stereo < ApplicationRecord
  has_many :stereo_components, dependent: :destroy
  has_many :components, through: :stereo_components

  def component_attributes=(attributes)
    attributes.each do |component_hash|
      if component_hash[:price] != ""
        if Component.find_by_name(component_hash[:name])
          c = Component.find_by_name(component_hash[:name])
          self.stereo_components.build(component_id: c.id)
          self.save
        else
          binding.pry
          self.components.build(component_hash)
          binding.pry
          self.save
          binding.pry
        end
      end
    end
  end

  def handle_entry(compvalues)
    binding.pry
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
    if s = self.stereo_components.find{|sc| sc.component.category == compvalues[:category] }
      s.destroy
    end
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

end
