const express = require('express'),
      bodyParser = require('body-parser'),
      weatherRequest = require('./requests/weather.req'),
      app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.render('index', {weather: null, error: null})
})

app.post('/', async (request, response) => {
    const { city } = request.body,
          {weather, error} = await weatherRequest(city)

    
    response.render('index', {weather, error})
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})
