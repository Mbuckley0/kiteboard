# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'kiteboard/version'

Gem::Specification.new do |spec|
  spec.name          = 'kiteboard'
  spec.version       = Kiteboard::VERSION
  spec.authors       = ['Mitchell Buckley']
  spec.email         = ['mitchell.buckley@live.com']

  spec.summary       = %q{A dashboard gem}
  spec.homepage      = 'https://github.com/Mbuckley0/kiteboard'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"

  spec.add_dependency "jquery-ui-rails", "~> 5.0.5"
  spec.add_dependency "rickshaw-rails", "~> 1.5.0"
  spec.add_dependency "gridstack-js-rails", "~> 0.2.3"
end
