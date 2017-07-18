class Cart < ApplicationRecord

	belongs_to :user

	has_many :orders
	has_many :books, through: :orders
end
