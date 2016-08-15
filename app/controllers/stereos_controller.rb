class StereosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @stereos = Stereo.all
    render json: @stereos
  end

  def show
    @stereo = Stereo.find(params[:id])
    render json: @stereo
  end

  def create
    @stereo = Stereo.new(stereo_params)
    @stereo.save
    render json: @stereo, status: 201
  end

  private

  def stereo_params
    params.require(:stereo).permit(:name, component_attributes: [:name, :price, :category, :brand])
  end


end
