
const express = require('express')
const app = express()

const path = require('path')
const pythonShell = require('python-shell')
const config = require('./config/dev');
const mongoose = require('mongoose')
const ejs = require('ejs');
const bodyParser = require('body-parser')

const problems = require("./mongo/problem.js");

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true
})
    .then(() => console.log('mongoDB Connected!'))
    .catch(err => console.log(err))

const PORT = 7000

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.set('views', __dirname + '/public/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
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

app.get('/problem/:id', (req, res) => {
    res.render(path.join(__dirname, "views/generic.ejs"))
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

    var nStart = new Date().getTime()

    const options = {

        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: path.join(__dirname, "./build/python"),
    }

    pythonShell.PythonShell.run('test.py', options, function (err, results) {

        if (err) throw err

        console.log(results)
    })

    var nEnd = new Date().getTime()
    console.log('running Time: ', nEnd - nStart, 'ms')

    return res.send('END')

}