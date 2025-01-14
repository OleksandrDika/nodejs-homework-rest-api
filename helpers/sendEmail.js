const nodemailer = require("nodemailer");
// require("dotenv").config();

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  await transport.sendMail(email);
  return true;
};

// const email = {
//   from: UKR_NET_EMAIL,
//   to: "satiya9256@soremap.com",
//   subject: "Verify email",
//   html: `<a href="">Click here to verify your email</a>`,
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

module.exports = sendEmail;
