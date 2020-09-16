class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.string :director
      t.string :producer
      t.string :writer
      t.string :screenplay_by
      t.integer :year_released
      t.string :genre
      t.string :img_url

      t.timestamps
    end
  end
end
