module Action
	def	jump
		@distance = rand(4) + 2
		puts "I jumped forward #{@distance} feet!"
	end
end
class Rabbit
	extend Action
	attr_reader	:name
	def	initialize(name)
		@name = name
	end
end

Rabbit.jump