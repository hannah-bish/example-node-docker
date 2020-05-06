import express from "express"

const app = express()
const PORT = 8080

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hello World');
});
