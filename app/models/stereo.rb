class Stereo < ApplicationRecord
  has_many :stereo_components
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
end
