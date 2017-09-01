import Utils from './utils.js'
const winston = require('winston')
const fs = require('fs-extra')
const path = require('path')

const logFilePath = path.join(Utils.getAppDir(), 'vrouter', 'vrouter.log')
fs.ensureFileSync(logFilePath)

const transports = []

if (process.env.NODE_ENV === 'development') {
  transports.push(new (winston.transports.Console)({
    level: 'debug'
  }))
  transports.push(new (winston.transports.File)({
    filename: logFilePath,
    level: 'debug'
  }))
} else {
  transports.push(new (winston.transports.File)({
    filename: logFilePath,
    level: 'info'
  }))
}

winston.configure({ transports })

export default winston
