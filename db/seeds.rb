# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all

admin = User.create!(username: 'admin', email: 'admin@admin.com', password: '123456')
puts "#{User.count} users created!"

joJo = Movie.create!(title: 'Jojo Rabbit', director: 'Taika Waititi', producer: 'Kevan Van Thompson', writer: 'Taika Waititi', screenplay_by: 'Taika Waititi', year_released: 2019, genre: 'Comedy', img_url: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/d7/27d9d7f45edb6235a1bd1b899a6309dd_500x735.jpg?t=1582096456', user: admin)
puts "#{Movie.count} movies created!"

joJoRev= Review.create!(summary: 'Awesome concept! It was definitely uncofortable to realize what you are laughing at but the concept was great and the characters were casted perfectly', star_rating: 4, movie: joJo, user: admin)
puts "#{Review.count} reviews created!"