
export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'metalcstore@gmail.com',
      pass: 'MetalcStore1.',
    },
    secure: true,
  })
}
