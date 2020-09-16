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


joJoRev= Review.create!(summary: 'Awesome concept! It was definitely uncofortable to realize what you are laughing at but the concept was great and the characters were casted perfectly', star_rating: 4)

puts "#{Review.count} reviews created!"