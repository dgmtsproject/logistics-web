import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Creating nodemailer transporter with app password...');

    // Using app password authentication
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "baba.trawally@tmhlogistics.com",
        pass: "nzay xcec rlap vjwj" // Your app password
      },
    });

    // Email content
    const mailOptions = {
      from: 'baba.trawally@tmhlogistics.com',
      to: 'info@tmhlogistics.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1e40af; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
              <p style="color: #666; margin: 10px 0 0 0;">TMH Logistics Website</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 20px;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">
                    <a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;">
                    <a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${company}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 20px;">Message</h2>
              <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This message was sent from the TMH Logistics contact form on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission - TMH Logistics

Contact Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
${company ? `- Company: ${company}` : ''}

Message:
${message}

Sent from TMH Logistics contact form on ${new Date().toLocaleString()}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    console.log('Email details:', {
      to: mailOptions.to,
      from: mailOptions.from,
      subject: mailOptions.subject,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message
    });
  }
}
