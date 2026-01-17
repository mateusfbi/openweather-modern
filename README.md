# OpenWeather Modern

> **Fork Notice**: This is a modern fork of the [OpenWeather extension](https://gitlab.com/skrewball/openweather) by @skrewball (Jason Oickle), migrated to support **GNOME Shell 45, 46, and 47** using ESM modules.
> 
> **Original Project**: [gitlab.com/skrewball/openweather](https://gitlab.com/skrewball/openweather)  
> **Original Authors**: Jason Oickle (@skrewball), Jens Lody (@jenslody)

<p align="left">
    <img src="https://gitlab.com/skrewball/assets/-/raw/main/openweather-screenshot.png" width="600">
</p>

OpenWeather Modern (*openweather-modern@mateusfbi.gmail.com*) is a GNOME Shell extension for displaying weather conditions and forecasts for any location on Earth. This version has been migrated from the legacy `imports` system to ECMAScript Modules (ESM) to ensure compatibility with modern GNOME Shell versions.

**Key Features:**
- ✅ Support for GNOME Shell 45, 46, and 47
- ✅ Migrated to ESM modules
- ✅ Multiple locations with editable names
- ✅ 3-hour forecasts for up to 5 days
- ✅ Beautiful, modern layout

Weather data is fetched from [OpenWeatherMap](https://openweathermap.org).

## ⚠️ Compatibility Notice

This version is **ONLY compatible with GNOME Shell 45+**. For GNOME Shell 43-44, please use the [original extension](https://gitlab.com/skrewball/openweather).

<br>

## Installation

After installation, restart GNOME Shell (*Wayland: `log out` or `reboot`*) and enable the extension through the *gnome-extensions* app.

### From Source (Recommended)

This fork is currently only available from source:

First make sure you have the following dependencies installed:

| Arch Based     | Debian Based                  | Fedora                 |
| ---            | ---                           | ---                    |
| `dconf`        | `dconf-gsettings-backend`     | `dconf`                |
| `gnome-shell`  | `gnome-shell-extension-prefs` | `gnome-extensions-app` |
| `git`          | `git`                         | `git`                  |
| `base-devel`   | `build-essential`             | `glib2-devel`          |
|                | `gettext`                     | `gettext-devel`        |
|                | `libsoup3`                    |                        |

Then run the following commands:

```bash
git clone https://github.com/mateusfbi/openweather-modern.git
cd openweather-modern
make && make install
```

<br>

## Support OpenWeather

OpenWeather (*gnome-shell-extension-openweather*) is provided completely free of charge. If you enjoy using this extension and would like to help support the project, please feel free to hit the button below!

<p align="left">
    <a href="https://www.paypal.com/donate/?hosted_button_id=6FLPTVXCJBVVC" target="_blank"><img src="https://gitlab.com/skrewball/assets/-/raw/main/paypal-donate.png" width="250"></a>
</p>

<br>

## Bugs

Bugs should be reported [here](https://gitlab.com/skrewball/openweather/issues) on the GitLab issues page.

When submitting a bug report, please make sure to provide as much information as you can about the issue, your Linux distribution, GNOME Shell version, and OpenWeather (*gnome-shell-extension-openweather*) version.

<br>

## Credits

### Fork Information

This GNOME Shell 45+ fork is maintained by **Mateus Brandão** (mateusfbi@gmail.com).

**Migration to ESM**: January 2026  
**Translation Improvements**: Portuguese (Brazil) - January 2026

### Original Project

This project is a fork of the [OpenWeather extension](https://gitlab.com/skrewball/openweather) originally created by:
- **Jason Oickle** (@skrewball) - Current maintainer of original project
- **Jens Lody** (@jenslody) - Original creator

See the original project's [`AUTHORS`](https://gitlab.com/skrewball/openweather/-/blob/master/AUTHORS) file for complete contributor history.

### Translations

Translations from the original project are preserved. Special thanks to all translators:

French: @franckgaga | Slovak: @jose1711 | Chinese: @xiaozhangup & @zyw271828 | Portuguese: @ronaldocosta & **@mateusfbi (pt_BR improvements)** | Russian: @vantu5z & @tvaliiev | Czech: @lev741 | Turkish: @oguzkarayemis | German: @zeners | Polish: @MarcinScieszka | Italian: @alealetti

### Icons

OpenWeather's icon was designed by [Sihan Liu](https://www.sihanliu.com) and licensed under the [CC-BY-SA](http://creativecommons.org/licenses/by-sa/3.0/) license.

Packaged weather icons are sourced from the [GNOME Project](http://www.gnome.org)'s [Adwaita Icon Theme](https://gitlab.gnome.org/GNOME/adwaita-icon-theme) under the GPLv3 license.

PayPal donate button and template used for the Gitlab button was designed by [Klemen Skerbiš](https://github.com/aha999/DonateButtons) under the GPLv3 license.

### License

OpenWeather is free software available under the terms of the GPLv3 license. See [`COPYING`](https://gitlab.com/skrewball/openweather/-/blob/master/COPYING) for details.
