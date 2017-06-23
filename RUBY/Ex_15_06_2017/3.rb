arr= [1,2,3,4,5,56,7,8,8,9,0,1,2,3,4,6,7,4,7,3,5,2,3,7,3,4]
# print "Nhap 1 so : "
# n= gets.chomp

def get_squares(arr)
	return arr.select{ |i| i > 0 && i == ( (i**(1.0/2)).to_i )**2 }.uniq.sort
end

puts get_squares(arr)
