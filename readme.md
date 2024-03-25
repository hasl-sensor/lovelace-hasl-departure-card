# HASL Departure Lovelace Card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![ha_version](https://img.shields.io/badge/homeassistant-2024.1.0%2B-yellow.svg)](https://www.home-assistant.io)
[![version](https://img.shields.io/badge/version-3.0.0-red.svg)](#)
[![maintained](https://img.shields.io/maintenance/yes/2024.svg)](#)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Present departure times from HASL 4 Departure sensors

![card](https://github.com/NecroKote/HA-hasl3-departure-card/assets/1721257/2a4208f1-9007-4888-b084-32468d734a3c)

## Manual Installation

Copy [`hasl4-departure-card.js`](./dist/hasl4-departure-card.js) to `<config>/www/hasl4-departure-card.js`

Where `<config>` is your Home Assistant configuration directory.
Then use the following in your `ui-lovelace.yaml` file:

```yaml
resources:
  - url: /local/hasl4-departure-card.js
    type: js
```

### Basic setup

In your lovelace dashboard, Edit Dashboard -> Add Card -> Search for 'HASL Departure Card'

## Configuration

Card fully supports configuration through the UI

![card editor](https://github.com/NecroKote/HA-hasl3-departure-card/assets/1721257/9397ab6f-bd13-480e-b246-dde131ab3bc7)


### Options
| Name                  | Type             | Required? | Description                                                                                                 |
|-----------------------|------------------|-----------|-------------------------------------------------------------------------------------------------------------|
| entities              | array            | required  | List of entities to show. 'Departure' sensor is advised.                                                    |
| show_name             | bool             | optional  | Render card name.                                                                                           |
| name                  | string           | optional  | If set, this will be rendered as the card name.                                                             |
| show_entity_name      | bool             | optional  | Render an individual name for each entity section.                                                          |
| show_header           | bool             | optional  | Render headers in each section such as "Line", "Destination" and "Departure".                               |
| show_icon             | bool             | optional  | Render transport icon for each line.                                                                        |
| show_departures       | bool             | optional  | Render departures section.                                                                                  |
| max_departures        | number           | optional  | Max departures to show, default to all.                                                                     |
| direction             | number           | optional  | Render departures only in said direction                                                                    |
| hide_departed         | bool             | optional  | If set, will hide already departured vehicles.                                                              |
| show_departed_offset  | bool             | optional  | If set, will show some departed vehicles, which departed less than the offset minutes ago.                  |
| adjust_departure_time | bool             | optional  | Adjust departure time taking last update into account.                                                      |
| show_time_always      | bool             | optional  | Always present time in HH:MM form. If not set, time will be presented as "in X minutes" or "X minutes ago". |
| show_updated          | bool             | optional  | Render the 'last updated' text                                                                              |
| language              | string           | optional  | The texts will be rendered in this language. Can be one of `sv-SE`, `en-EN`, `fr-FR`.                       |
| click_action          | string or object | optional  | Action when tapping the card. See section `click_action` below.                                             |

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


## Credits
- Huge thanks to [@dimmanramone](https://github.com/dimmanramone) for pimping the card!
- [@DSorlov](https://github.com/DSorlov) for his work on the original card