const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Send an email using nodemailer
 * @param {string} fromEmail - Sender email address
 * @param {string[]} toEmails - Array of recipient email addresses
 * @param {string} subject - Email subject
 * @param {string} message - Email message (HTML or plain text)
 */
const sendEmail = async (fromEmail, toEmails, subject, message) => {
    try {
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // SMTP server address
            port: 587,             // SMTP port
            secure: false,         // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        // Define email options
        const mailOptions = {
            from: fromEmail,            // Sender email
            to: toEmails.join(", "),    // Convert the array to a comma-separated string
            subject: subject,           // Subject
            html: message,              // HTML message body
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        return { success: false, error: error.message };
    }
};


module.exports = {
    sendEmail
}