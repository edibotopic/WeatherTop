# WeatherTop

Weather reporting application with CRUD functionality.

Made for learning purposes.

## Running

Clone the repo and `cd` into the project directory.

```
npm install
npm run dev
```

User data is stored as JSON in `models/db/`.
The data persists locally but is ignored by
Git during development, which keeps the repo
clean.

To test user creation/editing/deletion you
will need to generate new users.

## Features

Some notable features include:

- Signup, login and logout independent users
- User-specific sessions
- Users can add multiple stations
- Dashboard organise stations alphabetically
- Users can add multiple reports per station
- Multiple data input methods (text and dropdown)
- Unique date/time for each report added
- Summary data generated from reports
- Weather summary icon generated based on weather code
- Individual stations and reports can be deleted by user
- Users can edit their personal details

## Todo

### v0.0.1 (baseline)

- [x] Initial commit
- [x] Create GitHub repo
- [x] Can add/list stations
- [x] Details page on station click
- [x] `station-controller.js` implemented

### v0.1.0 (release 1)

- [x] `report-store.js` implemented
- [x] Station can have multiple reports
- [x] All parameters for reports: code, temp, wind speed and direction, pressure
- [x] Use appropriate weather codes

### v0.2.0 (release 2)

- [x] Member sign-in
- [x] User can create stations with userId and can see their stations
- [x] Lat/lng, max/mins for a station, taken from data in reports
- [x] Placeholder images for weather icons

### v0.2.1 (release 2 - revision)

- [x] Wind direction dropdown selection
- [x] Display icons for weather codes
- [x] Latitude and longitude input

### v0.2.2 (release 2 - final)

- [x] Display weather description in summary with image
- [x] Make better looking icons (including location)
- [x] Add units to all quantities

### v0.3.0 (release 3)

- [x] Members can delete stations
- [x] Members can delete reports
- [x] Stations ordered alphabetically
- [x] Make the brand icon not a cat

### v0.3.1 (release 3 - final)

- [x] Time/date for reports
- [x] User can edit their details
- [x] Deploy the site

### v0.3.2 (future release)

- [ ] Summaries shown on dashboard
- [ ] Member dashboard lists latest conditions for all stations
- [ ] Better icons, styling, theming

### Release 4

Not attempted — insufficient time.
