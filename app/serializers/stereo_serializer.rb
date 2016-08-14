class StereoSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :components
end
