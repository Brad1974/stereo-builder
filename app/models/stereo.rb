class Stereo < ApplicationRecord
  has_many :stereo_components
  has_many :components, through: :stereo_components
end
