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
          self.components.build(component_hash)
          self.save
        end
      end
    end
  end

  def handle_entry(compvalues)
    # looks in database for component with your compvalues name;
    # --if there it updates that record and then jumps to the next method
    # --if not there it creates that record and adds it to the stereo (form is such that in this scenario there definitely isn't an existing component already associated with the steroe)
    if c = Component.find_by(name: compvalues[:name])
      c.update(price: compvalues[:price])
      self.check_replace_or_add_association(c)
    else
      c = self.components.create(name: compvalues[:name], brand: compvalues[:brand], price: compvalues[:price], category: compvalues[:category])
    end
  end

  def check_replace_or_add_association(comp)
    # checks if stereo has component with your component's name
    # --if it does, great, all done.
    # --if not, it checks whether stereo has a component with the same category as compvalues
    # ----if it does, then sub in compvalues id for the existing component's id in the join model
    # ----if not, build a join table for that component and stereo
    if self.stereo_components.find{|sc| sc.component_id == comp[:id]}
    else
      if s = self.stereo_components.find{|sc| sc.component.category == comp[:category]}
        s.update(component_id: comp[:id])
        self.save
      else
        self.stereo_components.build(component_id: comp.id)
        self.save
      end
    end
  end

end
