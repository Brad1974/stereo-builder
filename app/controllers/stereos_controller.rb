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

  def update
    @stereo = Stereo.find(params[:id])
    @stereo.update(name: params[:name])
    params[:component_attributes].each_with_index do |k,i|
      if k[:name] === @stereo.components[i][:name]
        @stereo.components[i].update(price: k[:price])
      else
        @stereo.components.create(name: k[:name], brand: k[:brand], price: k[:price], category: k[:category])
        @stereo.stereo_components.find_by_component_id(k[:id]).destroy
      end
    end
    render json: @stereo, status: 201
  end

  def destroy
    Stereo.find(params[:id]).destroy
  end

  private

  def stereo_params
    params.require(:stereo).permit(:name, component_attributes: [:name, :price, :category, :brand])
  end


end
