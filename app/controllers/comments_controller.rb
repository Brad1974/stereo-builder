class CommentsController < ApplicationController
  def index
    @stereo = Stereo.find(params[:stereo_id])
    @comments = @stereo.comments
    render json: @comments
  end

  def create
    @stereo = Stereo.find(params[:stereo_id])
    @comment = @stereo.comments.build(content: params[:newcomment], user_id: current_user.id)
    if @comment.save
      render json: @comment, status: 201
    end
  end
end
