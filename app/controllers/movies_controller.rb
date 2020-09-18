class MoviesController < ApplicationController
    before_action :set_movie, only: [:update, :destroy]
    before_action :authorize_request, except: [:show]

 # GET /movies
 def index
    render json: @current_user.movies, include: :reviews, status: :ok
  end

  # GET /movies/1
  def show
    @movie = Movie.find(params[:id])
    render json: @movie, include: :user
  end

  # POST /movies
  def create
    @movie = Movie.new(movie_params)
    @movie.user = @current_user

    if @movie.save
      render json: @movie, status: :created
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movies/1
  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  def destroy
    @movie.destroy
  end

  private
    def set_movie
      @movie = @current_user.movies.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:name, :title, :director, :producer, :writer, :screenplay_by, :year_released, :genre, :img_url)
    end
end
