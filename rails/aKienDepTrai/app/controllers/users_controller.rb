class UsersController < ApplicationController

	def index
		@users= User.all
	end

	def new
		@user= User.new
	end

	def create
		@user = User.new( user_params )
		if @user.save
			@userpic = User.where( user_name: "#{params['user']['user_name']}" ).first
			@user.update(avatar: "#{@userpic['id']}.png")

			if params['user']['avatar'] != nil
				@file= params['user']['avatar'].tempfile
			else
				@file= File.open("app/assets/images/users/default.png", "rb")
			end
			File.open("app/assets/images/users/#{@userpic['id']}.png", 'wb') do |file|
				file.write( @file.read )
			end

			redirect_to users_path
		else
			render 'new'
		end
	end

	def show
		@user = User.find(params['id']) 
	end

	def edit
		@user = User.find(params['id']) 
	end

	def update
		user = User.find(params['id'])
		params['user'].to_hash.each do |i|
			user[ i[0] ]= i[1]
		end
		user.save
		redirect_to user
	end

	def destroy
		User.destroy(params['id'])
		redirect_to users_path
	end

	private
  def user_params
    params.require(:user).permit( :user_name, :email, :password, :name, :gender,
    															:birthday, :role, :avatar, :provider, :uid)
  end
end
