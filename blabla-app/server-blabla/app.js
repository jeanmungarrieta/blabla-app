import express from 'express'
import router from './src/router.js'

const app = express()
const port = 3001
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use('/', router);

  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

