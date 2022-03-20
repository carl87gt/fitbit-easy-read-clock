# fitbit-easy-read-clock

High-contrast, digital clock face with month, day, heart-rate, calories burned and steps. This clock face was design to be easily read in day or night with large fonts and high contrast colors to make it easier to read.

Designed for fitbit versa.

![Screenshot](https://raw.githubusercontent.com/carl87gt/fitbit-easy-read-clock/main/build/screenshots/Easy-read-clock-screenshot.png)

## History

1.0.4 2022-03-20 Add clockface color settings.

1.0.3 2022-03-19 Heartrate was not updating consistently; fixed.

1.0.2 2022-03-19 Converting to a CLI project. No application changes at this time.

1.0.1 2022-03-14 Fixed issue where heartrate would not load on startup. Release approved by FitBit

1.0.0 2022-03-14 Initial release of clockface

## Dev Notes

// to use types (check compatibiity with SDK)
npx fitbit-sdk-types

// to enter cli
- npx fitbit 

// in the cli build to build project
- $fitbit build

// in the cli install to install project
- $fitbit install