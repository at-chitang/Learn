n= 10
# print "Nhap 1 so : "
# n= gets.chomp

def sum(n)
	a= []
	if( n >= 0 )
		a << 0
		for i in (1..n)
			a << a.last + i
		end
	end
	return a
end

puts sum(n)
