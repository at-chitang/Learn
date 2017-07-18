class User < ApplicationRecord

	validates :name, presence: true, length: { minimum: 5 }

	validates :pass, presence: true, length: { minimum: 6 }
end
