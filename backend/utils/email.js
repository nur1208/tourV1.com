import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  // 1) create a transporter

  // const testAccount = await nodemailer.createTestAccount();
  // console.log({ testAccount });

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: "evj7y6r3m4yshwjb@ethereal.email", // generated ethereal user
  //     pass: "6x9YhrZ4KEcgwaK9MH", // generated ethereal password
  //   },
  // });

  // const transporter = nodemailer.createTransport({
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     pass: process.env.EMAIL_PASSWORD,
  //     // type: process.env.EMAIL_AUTH_TYPE,
  //   },
  //   secure: false,
  //   // proxy: "http://127.0.0.1:64331",
  // });

  // const transporter = nodemailer.createTransport({
  //   service: "yahoo",
  //   auth: {
  //     user: process.env.EMAIL_USERNAME_YAHOO,
  //     pass: process.env.EMAIL_PASSWORD_YAHOO,
  //   },
  //   proxy: "http://127.0.0.1:64331",
  // });

  // 2) define the mail options
  const mailOptions = {
    from: "Jonas <yahoo@yahoo.com>",
    to: options.email,
    // to: "md900nur@gmail.com",
    subject: options.subject,
    text: options.message,
  };
  // 3) send the mail with nodemailer.
  console.log(
    "Preview URL: %s",
    nodemailer.getTestMessageUrl(mailOptions)
  );
  // await transporter.sendMail(mailOptions);
};

export default sendEmail;
