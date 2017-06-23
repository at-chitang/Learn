def iq_test(numbers)
  b= numbers.split.map{|i| i.to_i}
  a= b.group_by{ |i| i%2 }
  if a[1].size == 1
  	return b.index(a[1][0])+1
  else
  	return b.index(a[0][0])+1
  end
end


puts iq_test("2 4 7 8 10")