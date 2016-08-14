class Component < ApplicationRecord
  has_many :stereo_components
  has_many :stereos, through: :stereo_components
end
