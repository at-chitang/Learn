class User < ApplicationRecord
	validates :user_name, :password, presence: true
	validates :user_name, uniqueness: { case_sensitive: false }, length:{ in: 6..30 }
	validates :email, presence: true, :if => Proc.new{ provider == 'email' }
	validates :uid, uniqueness: { scope: :provider }
	validate  :birthday?

	def birthday?
		self.errors.add( :birthday, 'must be over 16 years old' ) if birthday.present? && Time.now - 16.year < birthday
	end

	scope 

	has_many :carts, class_name: 'Cart'
	has_many :comment
	has_one :cart

	enum role: [ 'người dùng', 'người kiểm duyệt', 'quản trị viên']
	enum gender: [ 'Nam', 'Nữ', 'Ngại quá à' ]
end
