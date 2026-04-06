const nodemailer = require("nodemailer");

// Create a transporter using SMTP
exports.EmailService = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});




