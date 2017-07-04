class a

	@@link = Hash.new

	@@link[ "Homepage" ] = [ "/books", "/orders" ]

	a,b,c = @@link[ "Homepage" ]
	puts a
	puts b
	p c

end