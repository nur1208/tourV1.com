import nodemailer from "nodemailer";
import pug from "pug";
import path from "path";
import htmlToText from "html-to-text";

export class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `mohamed nur <${process.env.EMAIL_FROM}>`;
  }

  newTransporter() {
    if (process.env.NODE_ENV === "development") {
      // const testAccount = await nodemailer.createTestAccount();
      // console.log({ testAccount });

      // create reusable transporter object using the default SMTP transport
      // console.log("here");

      return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "lmlz4rpbv6qdakvt@ethereal.email", // generated ethereal user
          pass: "JTx4nvKt46MQHgW3fY", // generated ethereal password
        },
      });

      // send mail with defined transport object
      // const info = await transporter.sendMail({
      //   from: this.from, // sender address
      //   to: this.email, // list of receivers
      //   subject: this.message, // Subject line
      //   text: this.message,
      //   // html, // plain text body
      // });

      // eslint-disable-next-line no-console
      // console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      // eslint-disable-next-line no-console
      // console.log(
      //   "Preview URL: %s",
      //   nodemailer.getTestMessageUrl(info)
      // );
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
  }

  async sendEmailDev(template, subject) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //   console.log("here");

    //   const testAccount = await nodemailer.createTestAccount();
    //   console.log({ testAccount });

    // create reusable transporter object using the default SMTP transport

    const dirname = path.resolve();

    const html = pug.renderFile(
      `${dirname}/src/views/email/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "lmlz4rpbv6qdakvt@ethereal.email", // generated ethereal user
        pass: "JTx4nvKt46MQHgW3fY", // generated ethereal password
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: this.from,
      to: this.email,
      subject,
      // html,
      // text: htmlToText.fromString(html),
      text: "something",
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

  async send(template, subject) {
    const dirname = path.resolve();

    const html = pug.renderFile(
      `${dirname}/src/views/email/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    if (process.env.NODE_ENV === "development") {
      const mailOptions = {
        from: this.from,
        to: this.email,
        subject,
        // html,
        text: htmlToText.fromString(html),
      };

      const info = await this.newTransporter().sendMail(
        mailOptions
      );
      // eslint-disable-next-line no-console
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      // eslint-disable-next-line no-console
      console.log(
        "Preview URL: %s",
        nodemailer.getTestMessageUrl(info)
      );
      return;
    }

    const mailOptions = {
      from: this.from,
      to: this.email,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    await this.newTransporter().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to tour.com");
  }
}

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
