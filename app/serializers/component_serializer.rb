class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :brand, :popularity
  has_many :stereos
end
