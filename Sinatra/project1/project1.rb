class Project1 < Sinatra::Base

  @@connect =  Mysql2::Client.new( :host => "localhost", 
                                  :username => "root", 
                                  :password => "s", 
                                  :database => "project1")
  @@section= [ nil, "Đăng nhập", "/users" ]




# Tao moi ===============================
  get '/user/new' do
    @page_name= "NewUser"
    @id, @user_name, @user_link= @@section
    erb :newUser
  end

  get '/book/new' do
    @page_name= "NewBook"
    @id, @user_name, @user_link= @@section
    erb :newBook
  end

  get '/books/:id' do
    @page_name= "NewOrder"
    @id, @user_name, @user_link= @@section
    $link[@page_name] = [ "/books/#{@@section[0]}", "/orders/#{@@section[0]}" ]
    @books = @@connect.query("SELECT * FROM books")
    erb :newOrder
  end





# Xem ===============================

  get '/' do
    @page_name= "Homepage"
    @id, @user_name, @user_link= @@section
    if @id != nil
      @page_name= "User"
    end
    erb :home
  end

  get '/users' do
    @page_name= "Users"
    @id, @user_name, @user_link= @@section
    @users = @@connect.query("SELECT * FROM users")
    erb :users
  end

  get '/books' do
    @page_name= "Books"
    @id, @user_name, @user_link= @@section
    @books = @@connect.query("SELECT * FROM books")
    erb :books
  end

  get '/orders' do
    @page_name= "Orders"
    @id, @user_name, @user_link= @@section
    myQuery= "SELECT orders.id, users.name as user, books.name as book, orders.quantity, price
              FROM orders INNER JOIN users ON user_id = users.id
                          INNER JOIN books ON book_id = books.id"
    @orders = @@connect.query(myQuery)
    erb :orders
  end

  get '/orders/:id' do
    @page_name= "User"
    @id, @user_name, @user_link= @@section
    myQuery= "SELECT orders.id, users.name as user, books.name as book, orders.quantity, price
              FROM orders INNER JOIN users ON user_id = users.id
                          INNER JOIN books ON book_id = books.id
              WHERE users.id='#{@@section[0]}'"
    @orders = @@connect.query(myQuery)
    erb :userOrder
  end

  get '/user/:id' do
    @page_name= "User"
    @id, @user_name, @user_link= @@section
    $link[@page_name] = [ "/books/#{@@section[0]}", "/orders/#{@@section[0]}" ]
    @user= @@connect.query("SELECT * FROM users WHERE id= '#{@@section[0]}'").first
    erb :user
  end









# ====================================== POST ====================================== #

# Tao moi ===============================

  post '/user/new' do
    myQuery= "INSERT INTO  users( name, gender, birthday ) 
              VALUE( '#{params[:name]}', '#{params[:gender]}', '#{params[:birth]}' )"
    @@connect.query( myQuery )
    myQuery = "SELECT id FROM users ORDER BY id DESC"
    id= @@connect.query( myQuery ).first['id']
    @@section= [ @params['user_id'].to_i, @params['name'], "/user/#{@params['user_id']}" ]
    redirect "/user/#{id}"
  end

  post '/book/new' do
    insertFirst= "INSERT INTO books( name, authod, publisher, sale)
                  VALUE('#{params[:name]}', '#{params[:authod]}', 
                  '#{params[:publisher]}', '#{params[:sale]}' )"
    @@connect.query( insertFirst )

    getID = "SELECT id FROM books ORDER BY id DESC"
    id= @@connect.query( getID ).first['id']
    @filename = "#{id.to_i}.jpg"
    path = "./public/books/#{@filename}"
    insertImage= "UPDATE books SET image= '#{@filename}' WHERE id=#{id}"
    @@connect.query( insertImage )

    if( params[:file] != nil )
      file = params[:file][:tempfile]
      File.open("./public/books/#{@filename}", 'wb') do |f|
        f.write(file.read)
      end
    else
      File.open("./public/index/book_default.jpg", 'rb') do |img|
        File.open("./public/books/#{@filename}", 'wb') do |f|

          f.write(img.read)
        end
      end
    end

    redirect '/books'
  end

# Chinh sua ==============================

  post '/book/:id' do
    @page_name= "EditBook"
    @id, @user_name, @user_link= @@section
    @book= params
    erb :editBook
  end


  post '/order/:user_id' do
    @user_id= params['user_id']
    @page_name= "User"
    @id, @user_name, @user_link= @@section
    @book= params
    erb :makeOrder
  end

  post '/order/:user_id/:book_id' do
    if( params[:amount].to_i > 0 )
      @bookQuery = "UPDATE books SET quantity=quantity+#{params[:amount]} 
                    WHERE id=#{params[:book_id]}"
      @userQuery = "UPDATE users SET invoice=invoice+#{params[:amount].to_i*params[:price].to_i}
                    WHERE id=#{params[:user_id]}"
      @orderQuery= "INSERT INTO orders (user_id, book_id, quantity, price)
                    VALUE ( '#{params[:user_id]}', '#{params[:book_id]}', 
                            '#{params[:amount]}', #{params[:price]} )"
      @@connect.query(@bookQuery)
      @@connect.query(@userQuery)
      @@connect.query(@orderQuery)
    end
    redirect "/books/#{@@section[0]}"
    # redirect "/order/#{params['user_id']}"
  end

  post '/user/logout' do
    @@section= [ nil, "Đăng nhập", "/users" ]
    redirect "/users"
  end

  post '/user/:id' do
    @@section= [ @params['user_id'].to_i, @params['name'], "/user/#{@params['user_id']}" ]
    redirect "#{@@section[2]}"
  end






# ====================================== PUT ====================================== #

  put '/book/edit' do
    insertFirst= "UPDATE books SET  name      = '#{params[:name]}',
                                    authod    = '#{params[:authod]}',
                                    publisher = '#{params[:publisher]}',
                                    sale      = '#{params[:sale]}'
                  WHERE id= '#{params[:id]}'"
    @@connect.query( insertFirst )

    if( params[:file] != nil )
      file = params[:file][:tempfile]
      File.open("./public/books/#{params['id']}.jpg", 'wb') do |f|
        f.write(file.read)
      end
    end
    redirect '/books'
  end

  put '/user/edit' do
    @id= @@section[0]
    myQuery= "UPDATE users SET  name     = '#{params[:name]}',
                                gender   = '#{params[:gender]}',
                                birthday = '#{params[:birth]}' 
              WHERE id='#{@id}'"
    @@section[1]= params[:name]
    @@connect.query(myQuery)
    redirect "#{@@section[2]}"
  end






# ====================================== PUT ====================================== #

  delete '/book/delete/:id' do
    @@connect.query("DELETE FROM books WHERE id='#{params[:id]}' ")
    redirect '/books'
  end

  delete '/order/delete/byuser/:id' do
    @order= @@connect.query( "SELECT * FROM orders WHERE id= params['id']" ).first
    sale= @order['amount'].to_i*@order['price'].to_i
    @orderQuery= "DELETE FROM orders WHERE id=#{@order['id']}"
    @bookQuery = "UPDATE books SET quantity=quantity-#{@order['amount']} 
                   WHERE id=#{@order['book_id']}"
    @userQuery = "UPDATE users SET invoice=invoice+#{sale}
                   WHERE id=#{@order['user_id']}"
    binding.pry
    redirect "/orders/#{@@section[0]}"
  end

end