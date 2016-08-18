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
    params[:component_attributes].each do |k|
      binding.pry
      if k[:name] == ""
        (@stereo.stereo_components.find{|sc| sc.component_id == k[:id]}).destroy
      else
        if k[:id]
          component = Component.find(k[:id])
          component.update(price: k[:price])
          if @stereo.stereo_components.find{|sc| sc.component.category == k[:category]}
            @stereo.stereo_components.find{|sc| sc.component.category == k[:category]}.update(component_id: k[:id])
          else
            @stereo.components << component
            @stereo.save
          end
        else
          (@stereo.stereo_components.find{|sc| sc.component.category == k[:category]}).destroy
          @stereo.components.create(name: k[:name], brand: k[:brand], price: k[:price], category: k[:category])
        end
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
