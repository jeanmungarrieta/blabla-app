import express from 'express'
import router from './src/router.js'
import cors from 'cors'


const app = express()
const port = 3001

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cors())
app.use('/', router);


  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

