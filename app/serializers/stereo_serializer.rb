class StereoSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :component_attributes

  def component_attributes
    object.components
  end
end
