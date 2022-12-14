const express = require('express')
const app = express()
const path = require('path')
const pythonShell = require('python-shell')
const config = require('./config/dev');
const mongoose = require('mongoose')
const ejs = require('ejs');
const bodyParser = require('body-parser')


// 데이터베이스
const problems = require("./mongo/problem.js");

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true
})
    .then(() => console.log('mongoDB Connected!'))
    .catch(err => console.log(err))

const PORT = 7000

// =========================================================

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.set('views', __dirname + '/public/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

// =========================================================

app.get('/', (req, res) => {
    // 혹은 app.get('/' , (req, res) => {})
    res.render(path.join(__dirname, "views/index.ejs"))
})

app.get('/problem', async (req, res) => {

    await problems.find((err, data) => {
        try {
            console.log('find된 data: ', data)
            res.render(path.join(__dirname, "views/problembank.ejs"), { data: data })
        } catch (err) {
            console.error(err)
        }
    })
})

app.get('/problem/:_id', async (req, res) => {

    await problems.findOne({_id : req.params._id}, (err, datas) => {
        try {
            console.log('find된 data: ', datas)
            res.render(path.join(__dirname, "views/problempage.ejs"), { data: datas })
        } catch (err) {
            console.error(err)
        }
    })
})

app.post('/result/:_id', async (req, res) => {
    const codes = req.body.code[0]
    console.log(codes)
    
    await problems.findOne({ _id : req.params._id}, async (err, datas) => {
        try {
            console.log('find된 data: ', datas)

            await pythonShell.PythonShell.runString(codes, null, function (err, results) {

                if (err) throw err

                console.log('result: ', results)
                console.log('datas: ', datas)

                results = Number(results)
                datas = Number(datas.output_example)

                console.log('result: ', results)
                console.log('datas: ', datas)

                
                res.render(path.join(__dirname, "views/resultpage.ejs"), {code : codes, answer: datas, result: results})
            })
            
        } catch (err) {
            console.error(err)
        }
    })
    
})

// https://www.npmjs.com/package/python-shell


app.get('/about', (req, res) => {
    res.render(path.join(__dirname, "views/about.ejs"))
})

app.get('/generic', (req, res) => {
    res.render(path.join(__dirname, "views/generic.ejs"))
})

app.get('/elements', (req, res) => {
    res.render(path.join(__dirname, "views/elements.ejs"))
})

app.listen(PORT, () => {
    console.log(PORT + "번 포트로 연결되었습니다!")
})



exports.getTest = async function (req, res) {

    
}