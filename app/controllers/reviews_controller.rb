class ReviewsController < ApplicationController

 #GET /reviews
  def index
      @user = User.find(params[:user_id])
      @reviews = Review.where(user_id: @user.id)
      
      render json: @reviews
  end



end
