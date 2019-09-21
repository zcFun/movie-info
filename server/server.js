const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))

// 添加路由
app.get('/api',(req,res) =>{
    res.send({
        msg:'hello node'
    })
})

app.post('/user',(req,res) =>{
    console.log(req.body)
    res.send({
        code:200,
        data:req.body
    })
})

app.listen(3000,() => console.log('Server has been started on port 3000'))