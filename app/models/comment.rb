class Comment < ApplicationRecord
  belongs_to :stereo
  belongs_to :user
end
