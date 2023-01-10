require('dotenv').config()
const nodemailer = require('nodemailer')

module.exports = {
  transporter: nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  }),
  // mailOptions
  cronTest: {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_ONE,
    subject: '測試 cron',
    text: ''
  },
}
