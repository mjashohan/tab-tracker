const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const mysql = require('mysql')
//const scrape = require('./scrape')
//const request = require('request-promise')
//const cheerio = require('cheerio')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/showTable', (req, res) => {
//     console.log('Is it working?')
//     const proxTable = (async () => {
//         const result = await request.get('https://proxy11.com/free-proxy')
//         const $ = cheerio.load(result)
//         const tableData = []
        
//         $('#root > table > tbody > tr').each((i, el) => {
//             if (i === 0) return true
//             const tds = $(el).find("td")
//             const ip = $(tds[0]).text()
//             const port = $(tds[1]).text()
//             const code = $(tds[2]).text()
//             const country = $(tds[3]).text()
//             const anon = $(tds[4]).text()
//             const google = $(tds[5]).text()
//             const https = $(tds[6]).text()
//             const lastCheck = $(tds[7]).text()
    
//             const tableRow = {ip, port, code, country, anon, google, https, lastCheck}
//             tableData.push(tableRow)
//         })
//         console.log(tableData)
//     })
// })



// const db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '1234567',
//     database : 'proxybase'
// })

// db.connect((err) => {
//     if(err){
//         throw err
//     }
//     console.log('Alhamdulillah, connection established')
// })

// app.get('/getIP', (req, res) => {
//     let sql = 'SELECT IPAddress FROM proxylist'
//     let query = db.query(sql, (err, results) => {
//         if(err){
//             throw err
//         }
//         res.send(results)
//     })
// })

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    }) 
})

app.listen(process.env.PORT || 8081)
