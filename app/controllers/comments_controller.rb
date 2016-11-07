class CommentsController < ApplicationController
  def index
    @stereo = Stereo.find(params[:stereo_id])
    @comments = @stereo.comments
    render json: @comments
  end

  def create
    @comment = current_user.comments.build(comment_params)
    if @comment.save
      render json: @comment, status: 201
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:content, :user_id, :stereo_id)
  end
end
