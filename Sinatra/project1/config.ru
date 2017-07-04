require "sinatra"
require "pry"
require "mysql2"
require "./info"
require "./translate"
require "./project1"

use Rack::MethodOverride

run Project1