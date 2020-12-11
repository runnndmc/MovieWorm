require 'ddtrace'

Datadog.configure do |c|
    c.env = 'staging'
    c.service = 'rails'
    c.sampling.default_rate = 1.0
  
    c.use :rails
  end
