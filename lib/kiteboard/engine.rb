module Kiteboard
  class Engine < ::Rails::Engine
    initializer "precompile", group: :all do |app|
      if defined?(Sprockets) && Gem::Version.new(Sprockets::VERSION) >= Gem::Version.new("4.0.0.beta1")
      else
        # use a proc instead of a string
      end
    end
  end
end
