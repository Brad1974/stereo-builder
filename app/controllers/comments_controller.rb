class CommentsController < ApplicationController
  def index
    @stereo = Stereo.find(params[:stereo_id])
    @comments = @stereo.comments
    render json: @comments
  end
end
