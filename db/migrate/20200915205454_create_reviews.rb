class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.int :movie_id
      t.int :user_id
      t.string :summary
      t.int :star_rating

      t.timestamps
    end
  end
end
