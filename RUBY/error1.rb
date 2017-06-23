class Phuong
	private
	@@sida= "chi Phuong"

	public
	def Phuong.metghebay
		return @@sida
	end

	public
	def Phuong.metthiet
		puts "#{@@sida.object_id.to_s(16)}"
	end

end

class Person < Phuong
	@@sida= "sida"

	class << Phuong
		def metghe
			puts "#{Phuong.metghebay} #{@@sida}"
		end
	end
	def Person.metthiet
		puts "#{@@sida.object_id.to_s(16)}"
	end
end

Phuong.metthiet
Person.metthiet

# puts Phuong.metghebay
# Phuong.metghe
