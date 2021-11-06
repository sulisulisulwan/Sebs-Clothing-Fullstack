const nodemailer = require('nodemailer');
require('dotenv');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user:
    pass:

  }
})
}