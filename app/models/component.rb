class Component < ApplicationRecord
  has_many :stereo_components
  has_many :stereos, through: :stereo_components

  def popularity
    self.stereos.count
  end
  
end
