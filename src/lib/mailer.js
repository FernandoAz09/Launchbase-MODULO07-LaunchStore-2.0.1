const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b5a259abb5a52a",
      pass: "9e3302c32b1ee0"
    }
  });

