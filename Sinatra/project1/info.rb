$link = Hash.new

$link[ "Homepage" 		] = [ "/books"					, "/orders" 				]
$link[ "Users" 				]	= [ "/user/new"				, "/books" 					]
$link[ "Books" 				]	= [ "/book/new"				, "/users" 					]
$link[ "Orders"				]	= [ "/users"					, "/books" 					]

$link[ "User"					]	= [ "/orders/"				, "/books/" 				]

$link[ "NewUser" 			]	= [ "/users"					, "/books" 					]
$link[ "NewBook" 			]	= [ "/books"					, "/users" 					]

$link[ "EditBook" 		]	= [ "/books"					, "/users" 					]
