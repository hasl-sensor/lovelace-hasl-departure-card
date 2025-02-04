# hasl-cards

Changelog for HASL departure card

The format is based on [Keep a Changelog][keep-a-changelog]
<!-- and this project adheres to [Semantic Versioning][semantic-versioning]. -->

## [Unreleased]
## What's Changed

## [3.4.1] (2025-02-04)
## What's Changed
* Added slight border to bus lane badge to make it more visible

## [3.4.0] (2025-02-03)
## What's Changed
* Card now supports setting `hide_line_number` in the card configuration. This allows you to hide the line number in the card.
* Added back `show_icon` translation string

## [3.3.0] (2025-01-24)
## What's Changed
* Card now supports setting multiple `entities` in the card configuration. This allows you to show multiple departure boards in one card.
  * Previous configurations are still supported, but will be migrated automatically as soon as you open the card editor and save the configuration.
* Editor bundle name changed to `hasl-departure-card-editor.js` to help with manual installation.
* The card supports selecting LondonTfl sensors (thanks @morosanmihail !)

## [3.2.0] (2025-01-17)
## What's Changed
* Card is no longer compatible with HASL prior to version 3.2.0
* Complete rewrite on TypeScript using Lit
* Use Parcel to build the package
* Added visual editor for settings

## [2.6.2] (2023-06-12)
## What's Changed
* Fixed NaN and departure time calculations in https://github.com/hasl-sensor/lovelace-hasl-departure-card/issues/30 and https://github.com/hasl-sensor/lovelace-hasl-departure-card/issues/23


## [2.6.1] (2023-02-17)
## What's Changed
* Reference captured `config` instead of reading from `this` by @barbatron in https://github.com/hasl-sensor/lovelace-hasl-departure-card/pull/22
* make compact true by default by @morlic in https://github.com/hasl-sensor/lovelace-hasl-departure-card/pull/26
* Fixed bus name replacements by @jockesyk in https://github.com/hasl-sensor/lovelace-hasl-departure-card/pull/27
* Fix for old browsers without support for toLocaleString by @jockesyk in https://github.com/hasl-sensor/lovelace-hasl-departure-card/pull/28

## New Contributors
* @barbatron made their first contribution in https://github.com/hasl-sensor/lovelace-hasl-departure-card/pull/22
* @morlic made their first contribution in https://github.com/hasl-sensor/lovelace-hasl-departure-card/pull/26
* @jockesyk made their first contribution in https://github.com/hasl-sensor/lovelace-hasl-departure-card/pull/27

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
[2.6.1]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.6.1
[2.6.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.6.0
[2.5.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.5.0
[2.4.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.4.0
[2.3.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.3.0
[2.4.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.4.0
[2.5.0]: https://github.com/hasl-platform/lovelace-hasl-departure-card/releases/tag/v2.5.0
