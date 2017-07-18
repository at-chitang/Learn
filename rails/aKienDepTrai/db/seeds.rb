# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 50.times do |i|
# 	email= Faker::Internet.unique.email
# 	@user= User.new(
# 		user_name: Faker::Internet.user_name,
# 		email: email,
# 		password: '123',
# 		name: Faker::Name.name,
# 		provider: 'email',
# 		gender: rand(0..2),
# 		birthday: Faker::Date.birthday(18, 65),
# 		uid: email
# 		)
# 	if @user.save
# 		p i
# 	end
# end
# p "finish user"

# 100.times do |i|
# 	Book.create(
# 		name: Faker::Book.title,
# 		title: Faker::Book.title,
# 		author: Faker::Book.author,
# 		isn: Faker::Number.number(10)
# 		)
# end
# p "finish book"

# 100.times do |i|
# 	Cart.create( user_id: User.all.ids[rand(User.count)] )
# end
# p "finish cart"

# 100.times do |i|
# 	Order.create( 
# 		cart_id: Cart.all.ids[rand( Cart.count )], 
# 		book_id: Book.all.ids[rand( User.count )],
# 		quantity: rand(2)+1
# 		)
# end
# p "finish Order"

# 100.times do |i|
# 	Comment.create(
# 		content: Faker::Coffee.notes,
# 		user_id: User.all.ids[rand(User.count)],
# 		book_id: Book.all.ids[rand( User.count )],
# 		rating: rand(4)+1
# 		)
# end
# p "finish Comment"
