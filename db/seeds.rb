# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all
Review.destroy_all

admin = User.create!(
    username: 'admin', 
    email: 'admin@admin.com', 
    password: '123456')

cat = User.create!(
    username: 'cat', 
    email: 'cat@hat.com', 
    password:'cathat')

puts "#{User.count} users created!"



joJo = Movie.create!(
    title: 'Jojo Rabbit', 
    director: 'Taika Waititi', 
    producer: 'Kevan Van Thompson', 
    writer: 'Taika Waititi', 
    screenplay_by: 'Taika Waititi', 
    year_released: 2019, 
    genre: 'Comedy', 
    img_url: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/d7/27d9d7f45edb6235a1bd1b899a6309dd_500x735.jpg?t=1582096456', 
    user: admin)

thing = Movie.create!(
    title: 'The Thing', 
    director: 'John Carpenter', 
    producer: 'Wilbur Stark', 
    writer: 'John W. Campbell', 
    screenplay_by: 'Bill Lancaster', 
    year_released: 1982, 
    genre: 'Mystery', 
    img_url: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    user: cat)

puts "#{Movie.count} movies created!"




joJoRev= Review.create!(
    summary: 'Awesome concept! It was definitely uncofortable to realize what you are laughing at but the concept was great and the characters were casted perfectly', 
    star_rating: 4, 
    movie: joJo, 
    user: admin)

thingRev = Review.create!(
    summary: 'Um, amazing?! Kurt Russell is prime Russell. The costume department hit a homerun with his look. A great winter Sci-fi for sure.', 
    star_rating: 3,
    movie: thing,
    user: cat)

puts "#{Review.count} reviews created!"