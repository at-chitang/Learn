n= 9
# print "Nhap 1 so : "
# n= gets.chomp

def fibonaci(n)
	fi= [1, 1]
	(n-1).times do
		fi << fi[1]+fi.shift
	end
	return fi[0]
end

puts fibonaci(n)
