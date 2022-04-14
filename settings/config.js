const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = true
global.anti_delete = true

// setting
global.ownername ="Zeey"
global.ownernumber = "56954940311" , "56977774748"
global.botname = "Neonbot"
global.thumbnail = fs.readFileSync("./settings/Neonbot.jpeg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = '73f56b32560860d8a47c1469' //register lolhuman.xyz klo mau apikey
global.zenzkey = '69fc7b902a' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
