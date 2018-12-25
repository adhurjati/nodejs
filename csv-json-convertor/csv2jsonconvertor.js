const csvtojson = require('csvtojson')
const fs = require('fs')

const convertor = (path) => {
	let jsonbuff = ''
	csvtojson().fromFile(path)
		.on('data', (data) => {
			if (jsonbuff.length == 0) {
				jsonbuff += '['
			}
			else {
				jsonbuff += ','
			}
			jsonbuff += data.toString('utf8')
		})
		.on('done', (error) => {
			if (error) return console.log(error.message)
			jsonbuff += ']'
			fs.writeFile('customer-data.json', jsonbuff, function (error) {
				if (error) return console.error(error.message)
				console.log('converted file to json')
			})

		})
		.on('error' , (error) => {
			console.log('unable to convert to json' + error)
		})

}
convertor(process.argv[2])
