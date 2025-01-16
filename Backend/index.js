const express = require("express")
const app = express()
const port = 3000

//listen if the backend is running
//Try to connect to any database
mongoose
  .connect('mongodb://localhost:27017/Notes')

  .then(() => {
    console.log('Connected to MongoDB!')
    app.listen(port, () => {
      console.log('BLOG is running in port ' + port + '.')
    })
  })

  .catch((error) => {
    console.log(error)
  })
