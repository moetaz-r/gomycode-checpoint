const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

const mailOptions = {
  from: "Gomycode",
  to: "moetaz@gmail.com",
  subject: "Hello from Node.js",
  text: "This email was sent using Node.js!",
};

transporter.sendMail(mailOptions, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});
