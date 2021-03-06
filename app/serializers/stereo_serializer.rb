class StereoSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :component_attributes
  has_many :comments
  belongs_to :user
  def component_attributes
    object.components
  end
end
