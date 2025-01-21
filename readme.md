# HASL Departure Lovelace Card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![ha_version](https://img.shields.io/badge/homeassistant-2024.1.0%2B-yellow.svg)](https://www.home-assistant.io)
[![version](https://img.shields.io/badge/version-3.3.0-green.svg)](#)
[![maintained](https://img.shields.io/maintenance/yes/2025.svg)](#)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Present departure times from HASL 3.2.0+ Departure sensors.

Now with deviations!

![card](/images/dark-card.png)

## Manual Installation

Copy [`hasl4-departure-card.js`](./dist/hasl4-departure-card.js) and [`hasl4-departure-card-editor.js`](./dist/hasl4-departure-card-editor.js) files to `<config>/www/hasl4-departure-card.js`

Where `<config>` is your Home Assistant configuration directory.
Then use the following in your `ui-lovelace.yaml` file:

```yaml
resources:
  - url: /local/hasl4-departure-card.js
    type: js
```

## Basic setup

In your lovelace dashboard, Edit Dashboard -> Add Card -> Search for 'HASL Departure Card'

## Configuration

Card fully supports configuration through the UI

![card editor](/images/dark-card-editor.png)


### Options
| Name                 | Type             | Required? | Description                                                                                                 |
|----------------------|------------------|-----------|-------------------------------------------------------------------------------------------------------------|
| entity               | entity           | required  | The entity_id of the 'Departure' sensor.                                                                    |
| entities             | entity[]         | required  | The array of entity_id of the 'Departure' sensors. If set, takes precedence over `entity`                   |
| title                | string           | optional  | If set, this will be rendered as the card name.                                                             |
| show_entity_name     | bool             | optional  | Render a friendly name of a selected `entity`. Disabled when `entities` are set                             |
| show_header          | bool             | optional  | Render headers in each section such as "Line", "Destination" and "Departure".                               |
| show_icon            | bool             | optional  | Render transport icon for each line.                                                                        |
| show_departures      | bool             | optional  | Render departures section.                                                                                  |
| max_departures       | number           | optional  | Max departures to show, default to all.                                                                     |
| direction            | number           | optional  | Render departures only in said direction                                                                    |
| hide_departed        | bool             | optional  | If set, will hide already departured vehicles.                                                              |
| show_departed_offset | bool             | optional  | If set, will show some departed vehicles, which departed less than the offset minutes ago.                  |
| show_time_always     | bool             | optional  | Always present time in HH:MM form. If not set, time will be presented as "in X minutes" or "X minutes ago". |
| show_updated         | bool             | optional  | Render the 'last updated' text. Disabled when `entities` are set                                            |
| language             | string           | optional  | The texts will be rendered in this language. Can be one of `sv-SE`, `en-EN`, `fr-FR`.                       |
| click_action         | string or object | optional  | Action when tapping the card. See section `click_action` below.                                             |

Only one of `entity` and `entities` is required to function. If both are specified, `entities` takes precedence and `entity` is ignored.
Setting `entities` will render departures from all the sensors as one list, that is sorted by `expected` time.

#### `click_action`

The `click_action` option can be used to specify what happens when the card is tapped. It can be one of the following:

- Display information about the entity that was clicked:
    ```yaml
    click_action: info
    ```

-  Display information about the specific entity
    ```yaml
    click_action:
    entityId: sun.sun
    ```

- Call a service:
    ```yaml
    click_action:
      domain: light
      service: turn_on
      data:
        entity_id: light.living_room
    ```

## Development

You'll need Node.js and npm installed on your computer.
([Volta](https://volta.sh/) is recommended for managing Node.js versions)

```sh
npm install
npm run build
```

## Credits
- Huge thanks to [@dimmanramone](https://github.com/dimmanramone) for pimping the card!
- [@DSorlov](https://github.com/DSorlov) for his work on the original card

### Support the developers
- [@NecroKote](https://buymeacoffee.com/mkukhta) - maintainer
