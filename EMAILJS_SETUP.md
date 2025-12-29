# 📧 EmailJS Setup Instructions

This guide will help you set up EmailJS so that contact form submissions are sent to your email: **sandeepbhanage46@gmail.com**

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (sandeepbhanage46@gmail.com)
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form Template

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Sandeep,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Configure Environment Variables

1. Create a file named `.env` in the `vibrant-bio-web` folder (same level as `package.json`)
2. Add the following content:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual values from Steps 2, 3, and 4

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Restart Development Server

After creating the `.env` file:

1. Stop your development server (Ctrl+C)
2. Start it again: `npm run dev`
3. The contact form should now work!

## Testing

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (sandeepbhanage46@gmail.com)
4. You should receive the message!

## Troubleshooting

- **"Email service not configured" error**: Make sure your `.env` file exists and has the correct variable names (must start with `VITE_`)
- **Emails not arriving**: Check your spam folder, verify EmailJS service is connected correctly
- **CORS errors**: Make sure you're using the Public Key (not Private Key) from EmailJS

## Security Note

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- The Public Key is safe to use in frontend code (it's designed for client-side use)
- For production, you can also set these as environment variables in your hosting platform

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Perfect for personal portfolios

If you need more, upgrade to a paid plan.
