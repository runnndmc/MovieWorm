require 'ddtrace'

Datadog.configure do |c|
    c.use :rails, service_name: 'staging-rails-app'
    c.sampling.default_rate = 1.0
  
  end
