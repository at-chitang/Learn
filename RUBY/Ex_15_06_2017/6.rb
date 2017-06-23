n= 9
# print "Nhap 1 so : "
# n= gets.chomp

def prime_number?(num)
	i= 2
	while( i*i <= num )
		return false if num%i == 0
		i+= 1
	end
	true
end

puts prime_number?(n)
