class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :brand, :popularity, :favorite
  has_many :stereos
end
