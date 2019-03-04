import { join } from 'path'
import express from 'express'
import webpack from 'webpack'
import config, { output } from './webpack.config.dev'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(join(__dirname, 'index.html'))
})

app.listen(7770, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:7770')
})
