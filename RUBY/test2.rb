def XoaiTronXoayTron( arr )
	n= Math.sqrt( arr.size ).to_i

	result= Array.new(n) { |i| i= Array.new(n) }
	# [[nil, nil, nil]
	#  [nil, nil, nil]
	#  [nil, nil, nil]]
	# return result

	vt= 0
	for i in (1..n/2)	# Khong co 
		x= n/2-i+1
		# puts x

		leng= 2*x -1 + n%2
		# puts leng

# |vt,  ,  |
# |  ,  ,  |
# |  ,  ,  |		
		for j in (1..leng)
			result[i-1][j+i-2]= arr[vt+j-1]	# Chen phia tren cua ma tran
		end
		vt+= leng

# |  ,  ,vt|
# |  ,  ,  |
# |  ,  ,  |
		for j in (1..leng)
			result[j+i-2][n-i]= arr[vt+j-1]	# Chen ben phai cua ma tran
		end
		vt+= leng

# |  ,  ,  |
# |  ,  ,  |
# |  ,  ,vt|

		for j in (1..leng)
			result[n-i][n-j-i+1]= arr[vt+j-1]	# Chen phia duoi cua ma tran
		end
		vt+= leng

# |  ,  ,  |
# |  ,  ,  |
# |vt,  ,  |
		

		for j in (1..leng)
			result[n-j-i+1][i-1]= arr[vt+j-1]	# Cb
		end
		vt+= leng
		# puts vt
		# result.each{ |i| puts "#{i}"}
	end

	result[n/2][n/2]= arr.last		if n.odd?
	result
end

test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
# p "#{XoaiTronXoayTron( [1, 2, 3, 4, 5, 6, 7, 8, 9])}"

def arr(n)
	return Array.new(n*n) { |i| i+1}
end

n= 10
# XoaiTronXoayTron( arr(n) )
XoaiTronXoayTron( arr(n) ).each{ |i| puts "#{i}"}
