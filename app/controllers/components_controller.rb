class ComponentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @components = Component.all
    render json: @components
  end
  
end
