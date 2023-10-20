const express = require('express') // 익스프레스 모듈을 가져옴
const app = express() //새로운 익스프레스 앱을 만듦
const port = 5000 // 포트

// mongodb+srv://whoyou48:<password>@cluster0.ndd9xwz.mongodb.net/?retryWrites=true&w=majority

// hello world를 실행함
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})