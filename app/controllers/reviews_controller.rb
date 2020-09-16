class ReviewsController < ApplicationController

# GET /reviews
#  def index
#   @reviews = Review.all
#   render json: @reviews
# end

  def add_review_to_movie
    @movie = Movie.find(params[:movie_id])
    @review = Review.find(params[:id])

    #@movie.reviews << @review

    render json: @movie, include: :review, status: :ok
  end
end
