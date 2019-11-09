# SL Departure Lovelace Card
Present departure times from HASL Combination sensors. Huge thanks to [@dimmanramone](https://github.com/dimmanramone) for pimping the card!

![card](https://user-images.githubusercontent.com/8133650/56198334-0a150f00-603b-11e9-9e93-92be212d7f7b.PNG)

## Manual Installation
Copy [`hasl-departure-card.js`](https://github.com/hasl-platform/lovelace-hasl-departure-card/blob/master/dist/hasl-departure-card.js) to `<config>/www/hasl-departure-card.js`

Where `<config>` is your Home Assistant configuration directory.
Then use the following in your ui-lovelace.yaml file:

```yaml
resources:
  - url: /local/hasl-departure-card.js
    type: js
```

and use the card through this example:

```yaml
cards:
  - type: "custom:hasl-departure-card"
    header: false
    departures: true
    deviations: true
    timeleft: false
    updated: true
    name: Departures
    adjust_times: false
    hide_departed: false
    language: en-EN
    entities:
      - sensor.hasl_name
```

## Configuration variables
- **show_cardname**: Render card name, default `true`

- **header**: Render headers in the such as "line", "destination" and "time"

- **departures** (*Optional*): Render departure section, default `false`

- **deviations** (*Optional*): Render deviation section, default `false`

- **updated** (*Optional*): Render the last updated time section

- **timeleft** (*Optional*): Show as SL real time with minutes instead of time. If using **adjust_times** then this must be specified.

- **adjust_times** (*Optional*): Calculate time left adjusted to last update (used in conjunction with timeleft)

- **hide_departed** (*Optional*): This can hide already departured transports

- **language** (*Optional*): The texts will be rendered in this language. Can be one of `sv-SE` or `en-EN`-

- **name** (*Optional*): If specified it will not render titles per entitiy in the card, but rather have this as the card name. If not speficied it will render each sensors name

- **max_departures** (*Optional*): Max departures to show, default to all.

- **max_deviations** (*Optional*): Max deviations to show, defaults to all.

- **compact** (*Optional*): Compact style of the card. Default value is `true`