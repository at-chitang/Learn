n= 100
# print "Nhap 1 so : "
# n= gets.chomp

def get_squares(range)
	result= []
	i= 1
	while( i*i < range.end)
		result << i*i
		i+= 1
	end
	return result
end

puts get_squares(1..n)

