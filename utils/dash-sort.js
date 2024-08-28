export const DashSort = {
  sortAlpha(station) {
    station.sort((before, after) => {
      return (before.title < after.title ? -1 : (before.title > after.title ? 1 : 0));
    });
  }
}

// Logic for alpha sort modified from:
// https://stackoverflow.com/questions/14677060/400x-sorting-speedup-by-switching-a-localecompareb-to-ab-1ab10
