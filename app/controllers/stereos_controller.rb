class StereosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @stereos = Stereo.all
    render json: @stereos
  end
  
end
