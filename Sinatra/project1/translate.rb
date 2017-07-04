def toName( link, id= nil )
	case link
	when "/"						;		return "Trang chủ"
	when "/users"				;		return "Xem khách hàng"
	when "/books"				;		return "Xem sách"
	when "/orders"			;		return "Xem đơn hàng"
	when "/user/new"		;		return "Tạo khách hàng"
	when "/book/new"		;		return "Tạo sách"
	when "/books/#{id}"	;		return "Mua sách"
	when "/orders/#{id}";		return "Xem đơn hàng"
	else								;		return "Chưa đặt"
	end
end

# puts toName( "/books/1", 1)