# EmailJS Setup Guide

Your contact form is now configured to send emails to **tarunksks@gmail.com** when visitors submit the form.

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Connect your Gmail account (tarunksks@gmail.com)
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

4. Click **Save**
5. Copy the **Template ID** (e.g., `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxx`)

### Step 5: Update Your Code
Open `script.js` and replace these lines (around line 33-35):

```javascript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key
```

With your actual values:

```javascript
const EMAILJS_SERVICE_ID = "service_xxxxxxx"; // Your service ID
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx"; // Your template ID
const EMAILJS_PUBLIC_KEY = "xxxxxxxxxxxxxxx"; // Your public key
```

### Step 6: Test
1. Save the file
2. Refresh your portfolio website
3. Fill out the contact form
4. Check your email (tarunksks@gmail.com) for the notification!

## Fallback
If EmailJS isn't configured yet, the form will automatically fall back to opening the user's email client (mailto:).

## Troubleshooting
- Make sure all three IDs are correctly replaced
- Check EmailJS dashboard for any error logs
- Verify your email service is connected in EmailJS
- Test with a simple message first

## Free Tier Limits
- 200 emails per month (free)
- Perfect for a personal portfolio!

---

**Need help?** Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

