import express from "express"
import hello from "./controller/hello"

const app = express(),
  serverPort = process.env.PORT || 9095

app.use(express.static('public'))

app.use('/api/hello', hello)

app.listen(serverPort)