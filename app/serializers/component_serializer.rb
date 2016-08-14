class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :brand
  has_many :stereos
end
