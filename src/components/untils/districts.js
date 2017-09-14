import Districts from './districts.json'

export default {
  provinces: function () {
    return Districts[0]
  },
  cityUnder: function (province) {
    return !(typeof province === 'string' && province.length === 6) ? [Districts[1][0]]
      : Districts[1].filter(function (city) {
        return !city.value || city.value.substring(0, 2) === province.substring(0, 2)
      })
  },
  districtUnder: function (city) {
    return !(typeof city === 'string' && city.length === 6) ? [Districts[2][0]]
      : Districts[2].filter(function (district) {
        return !district.value || district.value.substring(0, 4) === city.substring(0, 4)
      })
  }
}
