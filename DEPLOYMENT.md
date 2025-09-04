# TMH Logistics Contact Form - Deployment Guide

## Overview
This project includes a contact form that sends emails using Google Workspace SMTP through Vercel serverless functions.

## Email Configuration
- **Sender**: baba.trawally@tmhlogistics.com
- **Recipient**: info@tmhlogistics.com
- **Service**: Google Workspace SMTP

## Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy: `vercel --prod`

### 3. Environment Variables (if needed)
The email credentials are currently hardcoded in the serverless function. For production, consider using environment variables:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add:
   - `GMAIL_USER`: baba.trawally@tmhlogistics.com
   - `GMAIL_PASS`: TrawallyD1ko

Then update `api/send-email.js` to use:
```javascript
auth: {
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_PASS
}
```

## Testing

### Local Development
1. Run `npm run dev`
2. Open the contact form
3. Fill out and submit the form
4. Check the browser console for logs
5. Check the terminal for server logs

### Production Testing
1. Deploy to Vercel
2. Test the contact form on the live site
3. Check Vercel function logs in the dashboard
4. Verify emails are received at info@tmhlogistics.com

## Console Logging
The system includes comprehensive console logging:
- Form submission data
- Email sending status
- Error messages
- Success confirmations

## File Structure
```
├── api/
│   └── send-email.js          # Vercel serverless function
├── src/
│   └── LandingPage.jsx        # Updated contact form
├── vercel.json                # Vercel configuration
└── package.json               # Updated with nodemailer dependency
```

## Troubleshooting

### Common Issues
1. **Email not sending**: Check Google Workspace SMTP settings and credentials
2. **CORS errors**: Ensure the API endpoint is correctly configured
3. **Form not submitting**: Check browser console for JavaScript errors

### Debug Steps
1. Check browser console for client-side errors
2. Check Vercel function logs for server-side errors
3. Verify email credentials are correct
4. Test with a simple email first

## Security Notes
- Email credentials are currently in the code (for testing)
- Consider using environment variables for production
- The serverless function includes input validation
- Only POST requests are allowed to the email endpoint
