class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.int :user_id
      t.string :title
      t.string :director
      t.string :producer
      t.string :writer
      t.string :screenplay_by
      t.int :year_released
      t.string :genre
      t.string :img_url

      t.timestamps
    end
  end
end
