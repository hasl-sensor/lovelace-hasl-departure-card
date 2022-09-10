# hasl-cards

Changelog for HASL departure card

The format is based on [Keep a Changelog][keep-a-changelog]
<!-- and this project adheres to [Semantic Versioning][semantic-versioning]. -->

## [Unreleased]

## [2.6.0] (2022-09-10)

### Added
- Implemented [hasl-sensor/integration #42](https://github.com/hasl-sensor/integration/issues/42) Bus line directions and name of bus direction
- Implemented [#12](https://github.com/hasl-sensor/lovelace-hasl-departure-card/issues/12) Only show "Last updated" info if it was updated longer than x minutes ago

### Fixed
- Fix [#15](https://github.com/hasl-sensor/lovelace-hasl-departure-card/issues/15) UpdatedDate and new HASL v3 doesn't work

### Changed
- Requires at least HA version 2021.12.0, which is same as hasl3

## [2.5.0] (2020-03-04)

- Card config fix #5
- Added french translation [@matfouc](https://github.com/matfouc)

## [2.4.0] (2019-11-20)

- Added tap_action #1
- Added offset #2
- Fixed show always time #3
- Cleaned up a litle bit

## [2.3.0] (2019-11-09)

- Migrated to HACS
- Separated the cards into 2 repos and removed the traffic card

## [2.2.0] (2019-11-05)

- Added show card name config variable in both cards
- Bugfixes

## [2.1.0] (2019-05-15)

- Migrated to separate project

[keep-a-changelog]: http://keepachangelog.com/en/1.0.0/
[Unreleased]: https://github.com/hasl-platform/lovelace-hasl-departure-card/compare/master...dev
[2.6.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.6.0
[2.5.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.5.0
[2.4.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.4.0
[2.3.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.3.0
[2.4.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.4.0
[2.5.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.5.0