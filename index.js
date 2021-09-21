const express = require('express'),
      app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('index')
})

app.post('/', (request, response) => {
    console.log(request.params)
    response.render('index')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})
