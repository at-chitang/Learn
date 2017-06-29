class MyApp < Sinatra::Base

	$conection= Mysql2::Client.new(	:host => "localhost", 
																	:username => "root", 
																	:password => "s", 
																	:database => "ChiDepTrai")

	get '/' do
		@sihc= 'Hello would!'
		erb :index
	end

	get '/books' do
		@books= $conection.query("select * from book")
		# binding.pry
		erb :books
	end

	get '/books/new' do
		erb :news
	end

	get '/books/edit/id/:id' do
		@idBook= params[:id]
		@MyQuery= "SELECT name FROM ChiDepTrai.book WHERE id='#{params[:id]}'"
		@nameBook= $conection.query(@MyQuery)

		binding.pry		
		erb :editID
	end

	post '/books' do
		@submit= params
		@MyQuery= "INSERT INTO ChiDepTrai.book VALUE( \'#{@submit[:id]}\', \'#{@submit[:name]}\' )"
		# binding.pry
		$conection.query(@MyQuery)
		redirect '/books'
	end

	post '/books/edit/:id' do
		@idBook= params["id"]
		@MyQuery= "SELECT name FROM ChiDepTrai.book WHERE id='#{@idBook}'"
		@nameBook= $conection.query(@MyQuery)
		erb :edit
		# redirect '/'
	end

	put '/books' do
		@books= params
		if( params["id"] == params["oldID"] )
			@MyQuery= "UPDATE ChiDepTrai.book SET name='#{params[:name]}' WHERE id='#{params[:id]}' "


			redirect "/books/edit/id/#{params[:oldID]}"
			binding.pry
		end
		binding.pry
		$conection.query(@MyQuery)
		redirect '/books'
	end

	delete '/books/:id' do
		@submit= params[:id]
		@MyQuery= "DELETE FROM ChiDepTrai.book WHERE id='#{@submit}'"
		$conection.query(@MyQuery)
		redirect '/books'
	end
end
