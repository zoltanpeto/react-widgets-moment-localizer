'use strict';
var moment = require('moment');

function endOfDecade(date) {
  return moment(date).add(10, 'year').add(-1, 'millisecond').toDate()
}

function endOfCentury(date) {
  return moment(date).add(100, 'year').add(-1, 'millisecond').toDate()
}

module.exports = {
  formats: {
    date: 'L',
    time: 'LT',
    default: 'lll',
    header: 'MMMM YYYY',
    footer: 'LL',
    weekday: function(day, culture, localizer) {
      return moment().locale(culture).weekday(day).format('dd')
    },

    dayOfMonth: 'DD',
    month: 'MMM',
    year: 'YYYY',

    decade: function(date, culture, localizer)  {
      return localizer.format(date, 'YYYY', culture) 
        + ' - ' + localizer.format(endOfDecade(date), 'YYYY', culture)
    },
    
    century: function(date, culture, localizer) {
      return localizer.format(date, 'YYYY', culture)
        + ' - ' + localizer.format(endOfCentury(date), 'YYYY', culture)
    }
  },

  firstOfWeek: function(culture){ 
    return moment.localeData(culture).firstDayOfWeek()
  },

  parse: function(value, format, culture){
    return moment(value, format).locale(culture).toDate()
  },

  format: function(value, format, culture){
    return moment(value).locale(culture).format(format)
  }
}