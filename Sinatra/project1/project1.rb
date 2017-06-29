class Project1 < Sinatra::Base

  @@connect =  Mysql2::Client.new( :host => "localhost", 
                                  :username => "root", 
                                  :password => "s", 
                                  :database => "project1")

  get '/' do
    erb :home
  end

  get '/users' do
    @users = @@connect.query("SELECT * FROM users")
    erb :users
  end

  get '/user/new' do
    erb :newUser

  end

  get '/books' do
    @books = @@connect.query("SELECT * FROM books")
    erb :books
  end

  get '/book/new' do
    erb :newBook
  end

  post '/user/new' do
    MyQuery = "INSERT INTO  users(            name,               gender,               birthday ) 
                            VALUE( '#{params[:name]}', '#{params[:gender]}', '#{params[:birth]}' )"
    @@connect.query( MyQuery )
    redirect '/users'
  end

  post '/book/new' do
    @filename = params[:file][:filename]
    file = params[:file][:tempfile]
    path = "./public/books/#{@filename}"
    MyQuery = "INSERT INTO books( name, authod, image, publisher, sale)
              VALUE('#{params[:name]}', '#{params[:authod]}', '#{params[:file][:filename]}', 
                    '#{params[:publisher]}', '#{params[:sale]}' )"
    # binding.pry
    @@connect.query( MyQuery )
    File.open("./public/books/#{@filename}", 'wb') do |f|
      f.write(file.read)
    end

    redirect '/books'
  end

end