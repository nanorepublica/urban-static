# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "urban-static"
  spec.version       = "0.1.6"
  spec.authors       = ["Andrew Miller"]
  spec.email         = ["info@akmiller.co.uk"]

  spec.summary       = %q{Bootstrap based theme, built from a configuration defined in `_config.yml` allowing 
    sections of pages and pages to be easily managed from one place.}
  spec.homepage      = "https://github.com/urban-static"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|assets|LICENSE|README)}) }

  spec.add_development_dependency "jekyll", "~> 3.2"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
