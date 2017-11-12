const nodemailer = require('nodemailer');
const icsHelper = require('./icsHelper');
const verifyParams = require('./verifyParam');

require('dotenv').config()

exports.handler = (event, context, callback) => {
  const {start, hospital, doctor, email} = event;
  
  if(verifyParams(start, hospital, doctor, email)) {
    callback(null, 'success');
    const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const html = `
      <h4>You have an registered an appoinment with ${doctor} at ${hospital}. The time is ${start}</h4>
      <br/>
      <p>Thank You using the service. Please be there on time</p>
      <br/>
  `;

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
        callback(null, 'error');
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    let mailOptions = {
      from: 'Find Care <agney@outlook.in>',
      to: event.email,
      subject: 'Appointment',
      html: html,
      icalEvent: {
        method: 'request',
        filename: 'appointment.ics',
        content: icsHelper.createEvent(new Date(start), hospital, doctor, email)
      }
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } else {
    callback(null, 'Please include start, hospital, doctor and email parameters');
  }
}