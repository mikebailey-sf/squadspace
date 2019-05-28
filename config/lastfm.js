const LastFM = require('last-fm')
const lastfm = new LastFM('97963145409304edb5c0898d4add1479', { userAgent: 'MyApp/1.0.0 (http://localhost:3000)' })
 
lastfm.trackSearch({ q: 'the greatest' }, (err, data) => {
  if (err) console.error(err)
  else console.log(data)
})