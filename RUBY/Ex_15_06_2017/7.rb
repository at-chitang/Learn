n= 28
# print "Nhap 1 so : "
# n= gets.chomp

def  perfect_number?(num)
	i= 1
	s= 0
	while( i*2 <= num )
		s+= i if num % i == 0
		i+= 1
	end
	( s == num ) ? true : false
end

puts perfect_number?(n)
