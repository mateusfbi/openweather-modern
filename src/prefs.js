/*
   This file is part of OpenWeather (gnome-shell-extension-openweather).

   OpenWeather is free software: you can redistribute it and/or modify it under the terms of
   the GNU General Public License as published by the Free Software Foundation, either
   version 3 of the License, or (at your option) any later version.

   OpenWeather is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
   without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
   See the GNU General Public License for more details.

   You should have received a copy of the GNU General Public License along with OpenWeather.
   If not, see <https://www.gnu.org/licenses/>.

   Copyright 2022 Jason Oickle
*/

import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';
import Gdk from 'gi://Gdk';

import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import * as GeneralPrefs from './preferences/generalPage.js';
import * as LayoutPrefs from './preferences/layoutPage.js';
import * as LocationsPrefs from './preferences/locationsPage.js';
import * as AboutPrefs from './preferences/aboutPage.js';

export default class OpenWeatherPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        let iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default());
        if (!iconTheme.get_search_path().includes(this.path + "/media")) {
            iconTheme.add_search_path(this.path + "/media");
        }

        const settings = this.getSettings();
        const generalPage = new GeneralPrefs.GeneralPage(settings);
        const layoutPage = new LayoutPrefs.LayoutPage(settings);
        const locationsPage = new LocationsPrefs.LocationsPage(window, settings);
        const aboutPage = new AboutPrefs.AboutPage(this);

        let prefsWidth = settings.get_int('prefs-default-width');
        let prefsHeight = settings.get_int('prefs-default-height');

        window.set_default_size(prefsWidth, prefsHeight);
        window.set_search_enabled(true);

        window.add(generalPage);
        window.add(layoutPage);
        window.add(locationsPage);
        window.add(aboutPage);

        window.connect('close-request', () => {
            let currentWidth = window.default_width;
            let currentHeight = window.default_height;
            // Remember user window size adjustments.
            if (currentWidth != prefsWidth || currentHeight != prefsHeight) {
                settings.set_int('prefs-default-width', currentWidth);
                settings.set_int('prefs-default-height', currentHeight);
            }
            window.destroy();
        });
    }
}