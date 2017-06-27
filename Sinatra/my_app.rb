class MyApp < Sinatra::Base

	get '/' do
		@sihc= 'Hello would!'
		erb :index
	end

	get '/books' do
		@conection= Mysql2::Client.new(:host => "localhost", :username => "root", :password => "s", :database => "ChiDepTrai")
		@books= @conection.query("select * from book")
		# binding.pry
		erb :books
	end

	get '/books/new' do
		erb :news
	end

	post '/books' do
		@submit= params
		@conection= Mysql2::Client.new(:host => "localhost", :username => "root", :password => "s", :database => "ChiDepTrai")
		@MyQuery= "INSERT INTO ChiDepTrai.book VALUE( \'#{@submit[:id]}\', \'#{@submit[:name]}\' )"
		# binding.pry
		@conection.query(@MyQuery)
		redirect '/'
	end

end
