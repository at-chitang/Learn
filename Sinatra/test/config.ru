require "sinatra"
require "pry"
require "mysql2"
require "./my_app"

use Rack::MethodOverride

run MyApp