# Release history

**All notable changes to this project will be documented in this file.**

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<details>
  <summary><strong>Guiding Principles</strong></summary>

- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each versions is displayed.
- Mention whether you follow Semantic Versioning.

</details>

<details>
  <summary><strong>Types of changes</strong></summary>

Changelog entries are classified using the following labels _(from [keep-a-changelog](http://keepachangelog.com/)_):

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

</details>

## [2.0.4] - 2019-04-10

### Fixed

- Readme link [fixed](https://github.com/micromatch/picomatch/pull/13/commits/a96ab3aa2b11b6861c23289964613d85563b05df) by @danez.
- `options.capture` now works as expected when fastpaths are enabled. See https://github.com/micromatch/picomatch/pull/12/commits/26aefd71f1cfaf95c37f1c1fcab68a693b037304. Thanks to @DrPizza.

## [2.0.0] - 2019-04-10

### Added

- Adds support for `options.onIgnore`. See the readme for details
- Adds support for `options.onResult`. See the readme for details

### Breaking changes

- The unixify option was renamed to `windows`
- caching and all related options and methods have been removed

## [1.0.0] - 2018-11-05

- adds `.onMatch` option
- improvements to `.scan` method
- numerous improvements and optimizations for matching and parsing
- better windows path handling

## 0.1.0 - 2017-04-13

First release.


[2.0.4]: https://github.com/jonschlinkert/micromatch/compare/2.0.0...2.0.4
[2.0.0]: https://github.com/jonschlinkert/micromatch/compare/1.0.0...2.0.0
[1.0.0]: https://github.com/jonschlinkert/micromatch/compare/0.1.0...1.0.0
[keep-a-changelog]: https://github.com/olivierlacan/keep-a-changelog