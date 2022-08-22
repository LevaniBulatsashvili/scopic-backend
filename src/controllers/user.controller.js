const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻"',
        to: "",
        subject: "Hello ✔",
        html: "<h2>Sending Email with node</h2>"
    });
    res.status(200).json({
      status: 'success',
      message: 'email succesfully sent'
    })
  }
  catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}
