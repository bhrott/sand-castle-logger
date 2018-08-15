# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.0] - 2018-08-14

### Added
- Makefile: if you use docker, you have usefull comands in the Makefile.

### Changed
- Api: Now the api receive an `color` instead `type`. It's more flexible and let you decide the types of your logs.
- Logs: now the logs has max height. It prevents large logger + long scrolling time.