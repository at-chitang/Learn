maskify('4556364607935616') # should return '############5616'
maskify('64607935616')      # should return '#######5616'
maskify('1')                # should return '1'
maskify('')                 # should return ''

def maskify(cc)
  cc.gsub(/.(?=.{4})/, "#")
end
##########################################################################
foo 		-> foo1
foobar23-> foobar24
foo0042 -> foo0043
foo9 		-> foo10
foo099	-> foo100

def increment_string(input)
  input.sub(/\d*$/) { |n| n.empty? ? 1 : n.succ }
end

def increment_string(input)
  input[/\d\z/] ? input.sub(/(\d+)\z/) { $1.next } : input + '1'
end

def increment_string(input)
  input =~ /^((?:[^\d]+\d+)*(?:[^\d]+))?(\d*)$/
  sprintf("%s%0#{$2.length}d", $1, ($2.to_i + 1))
end

def increment_string(input)
  input.sub(/\d*$/) { |c| c.empty? ? 1 : c.succ }
end