const request = require('request-promise')
const cheerio = require('cheerio')
var tableData = []

var proxTable = (async () => {
    const result = await request.get("https://free-proxy-list.net/")
    const $ = cheerio.load(result)

    $("#proxylisttable > tbody > tr").each((i, el) => {
        if (i === 0) return true
        const tds = $(el).find("td")
        const ip = $(tds[0]).text()
        const port = $(tds[1]).text()
        const code = $(tds[2]).text()
        const country = $(tds[3]).text()
        const anon = $(tds[4]).text()
        const google = $(tds[5]).text()
        const https = $(tds[6]).text()
        const lastCheck = $(tds[7]).text()

        var tableRow = {ip, port, code, country, anon, google, https, lastCheck}
        tableData.push(tableRow)
        return tableData
    })
})

module.exports = proxTable