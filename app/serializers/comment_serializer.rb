class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :stereo_id
  belongs_to :user
end
