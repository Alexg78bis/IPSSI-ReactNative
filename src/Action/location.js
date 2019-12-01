export const setLocation = ({ latitude = 0, longitude = 0 } = {}) => ({
  type: 'LOCATION_SET',
  location: {
    longitude,
    latitude
  }
})
