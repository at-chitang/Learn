require "mysql2"

client = Mysql2::Client.new(:host => "localhost", :username => "root", :password => "s", :database => "ChiDepTrai")
insert = client.query("insert into test values ('oh ho') ")

result = client.query("select * from test")
result.each{|i| puts i}