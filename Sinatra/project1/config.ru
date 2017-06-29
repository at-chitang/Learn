require "sinatra"
require "pry"
require "mysql2"
require "./project1"

use Rack::MethodOverride

run Project1