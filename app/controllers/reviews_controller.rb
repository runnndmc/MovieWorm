class ReviewsController < ApplicationController
before_action :authorize_request 
 

#GET /reviews
  def index
      render json: @current_user.reviews
  end


end
