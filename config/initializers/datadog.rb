require 'ddtrace'

Datadog.configure do |c|
    c.env = 'staging'
    c.service = 'login-auth'
    c.sampling.default_rate = 1.0
  
    c.use :rails
  end