const express = require('express')
const app = express()
const path = require("path")
const pythonShell = require('python-shell')
const config = require('./config/dev');
const mongoose = require('mongoose')
const ejs = require('ejs');


const { Problem } = require("./mongo/problem");
const { rmSync } = require('fs');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
  })
    .then(() => console.log('mongoDB Connected!'))
    .catch(err => console.log(err))

const PORT = 7000

app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/public/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res) => {
    res.render(path.join(__dirname, "./views/index.html"));
})

app.get('/problem', (req, res) => {
    var problems = Problem.find({})
    res.render(path.join(__dirname, "./views/problembank.html"), { data: problems });
    console.log('problems: ', problems)
})

app.get('/problem/:id')

app.get('/generic', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/generic.html"))
})

app.get('/elements', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/elements.html"))
})

app.listen(PORT, () => {
    console.log(PORT+"번 포트로 연결되었습니다!")
})



exports.getTest = async function(req, res) {
    
    var nStart = new Date().getTime()

    const options = {

        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: path.join(__dirname, "./build/python"),
    }

    pythonShell.PythonShell.run('test.py', options, function (err, results) {
        
        if(err) throw err

        console.log(results)
    })

    var nEnd = new Date().getTime()
    console.log('running Time: ', nEnd-nStart, 'ms')

    return res.send('END')

}