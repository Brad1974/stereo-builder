class ComponentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @components = Component.all
    render json: @components
  end

  def update
    @component = Component.find(params[:id])
    @component.stereo_components.find_by(stereo_id: params[:_json]).destroy
  end


end
