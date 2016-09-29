class StereosController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_stereo, except: [:index, :new, :create]


  def index
    @stereos = Stereo.all
    render json: @stereos
  end

  def show
    @stereo = Stereo.find(params[:id])
    render json: @stereo
  end

  def create
    @stereo = current_user.stereos.build(stereo_params)
    @stereo.save
    render json: @stereo, status: 201
  end

  def update
    @stereo = Stereo.find(params[:id])
    if current_user == @stereo.user
      @stereo.update(name: params[:name])
      params[:component_attributes].each do |c|
        @stereo.handle_entry(c)
      end
      render json: @stereo, status: 201
    end
  end

  def destroy
    if current_user == @stereo.user
      @stereo.destroy
    end
  end

  private

  def stereo_params
    params.require(:stereo).permit(:name, component_attributes: [:name, :price, :category, :brand])
  end

  def set_stereo
    @stereo = Stereo.find(params[:id])
  end

end
