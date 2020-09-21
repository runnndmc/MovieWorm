class ReviewsController < ApplicationController
  before_action :authorize_request 
  before_action :set_movie, only: [:show, :update, :destroy]
 

#GET /reviews
  def index
      render json: @current_user.reviews
  end

#GET 
  def show
    @movie=Movie.find(params[:movie_id])
    render json: @review, status: :ok
  end

  # POST /reviews
  def create 
    puts params
    @movie=Movie.find(params[:review][:movie_id])
    @review = Review.new(review_params)
    @review.movie = @movie
    @review.user = @current_user

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movies/1
  def update
    if @review.update(review_params)
      render json: @review
    else 
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  def detroy 
    @review.destroy
  end

  
  private

  def set_review
    @review=@current_user.reviews.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:summary, :star_rating, :movie_id)
  end
end