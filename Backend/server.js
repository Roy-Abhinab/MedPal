import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import e from 'express'

const app = express()
const port = process.env.PORT || 7000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})