import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export default async function sendEmail(options) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   console.log("here");

  //   const testAccount = await nodemailer.createTestAccount();
  //   console.log({ testAccount });

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "evj7y6r3m4yshwjb@ethereal.email", // generated ethereal user
      pass: "6x9YhrZ4KEcgwaK9MH", // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: options.email, // list of receivers
    subject: options.message, // Subject line
    text: options.message,
    // html, // plain text body
  });

  // eslint-disable-next-line no-console
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // eslint-disable-next-line no-console
  console.log(
    "Preview URL: %s",
    nodemailer.getTestMessageUrl(info)
  );
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
