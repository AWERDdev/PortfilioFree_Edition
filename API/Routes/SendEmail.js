const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require('path');
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, '../ENVS', '.env') });

const OAuth2 = google.auth.OAuth2;

router.post("/SendEmailBYgmail", async (req, res) => {
  console.log('route called');
  const { userName: name, userEmail: email, userMessage: message } = req.body;
  console.log('Data retrieved');

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }
  console.log('verifying data');

  // Gmail OAuth2 Setup
  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  console.log('creating OAuth2');
  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  console.log('sending Credentials');
  try {
    const { token } = await oauth2Client.getAccessToken();
    if (!token) {
      return res.status(500).json({ success: false, message: "Failed to generate access token." });
    }
    console.log('receiving token');

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: token,
      },
    });

    console.log('Creating mail options');
    
    // Current date for the email
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Enhanced HTML email template with better styling
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Contact</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-container {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
          }
          .email-header {
            background-color: #6b46c1;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .email-body {
            padding: 20px;
            background-color: #f9f9f9;
          }
          .contact-info {
            background-color: white;
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          .message-content {
            background-color: white;
            padding: 15px;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            white-space: pre-line;
          }
          .field-name {
            font-weight: bold;
            color: #6b46c1;
          }
          .email-footer {
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #666;
            background-color: #f1f1f1;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>New Portfolio Contact Message</h1>
            <p>${currentDate}</p>
          </div>
          <div class="email-body">
            <div class="contact-info">
              <p><span class="field-name">Name:</span> ${name}</p>
              <p><span class="field-name">Email:</span> <a href="mailto:${email}">${email}</a></p>
            </div>
            <div class="message-content">
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <div class="email-footer">
            <p>This message was sent from your portfolio contact form.</p>
            <p>© ${new Date().getFullYear()} Your Portfolio</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.GMAIL_USER
      },
      to: process.env.GMAIL_USER,
      subject: `New Contact: ${name} - Portfolio Inquiry`,
      html: htmlContent,
      // Adding text version for better deliverability
      text: `
New Contact Message from Portfolio

From: ${name} (${email})
Date: ${currentDate}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
      // Adding headers to reduce spam likelihood
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'High',
        'X-Mailer': 'Portfolio Contact System'
      }
    };

    console.log('sending email');
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: "Error sending message." });
  }
});

module.exports = router;
