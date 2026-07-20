# Production Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Best for:**
- Next.js, Vite, React apps
- Automatic deployments from GitHub
- Free tier with generous limits
- Best performance

**Steps:**

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Sign up at Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub

3. **Connect your repository**
   - Import project
   - Select `littlelights-website`
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`:
   
   ```
   VITE_EMAILJS_SERVICE_ID = service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID = template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY = xxxxx
   VITE_FIREBASE_API_KEY = xxxxx
   VITE_FIREBASE_AUTH_DOMAIN = xxxxx
   VITE_FIREBASE_PROJECT_ID = xxxxx
   VITE_FIREBASE_STORAGE_BUCKET = xxxxx
   VITE_FIREBASE_MESSAGING_SENDER_ID = xxxxx
   VITE_FIREBASE_APP_ID = xxxxx
   ```

5. **Deploy**
   - Click Deploy
   - Your site goes live at `your-project.vercel.app`

6. **Custom Domain**
   - Settings → Domains
   - Add your domain (babysittinglittlelights.com)
   - Update DNS settings

---

### Option 2: Netlify

**Steps:**

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Connect repository
   - Select `littlelights-website`

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add all variables

5. **Deploy**
   - Click Deploy
   - Your site is live

---

### Option 3: GitHub Pages

**Steps:**

1. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/',
   })
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm install gh-pages --save-dev
   ```

   Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

   ```bash
   npm run deploy
   ```

---

## 📧 EmailJS Production Setup

### Security Best Practices

1. **Never commit credentials to GitHub**
   - Use `.env.local` locally
   - Use platform environment variables in production

2. **Rotate your Public Key**
   - Go to EmailJS account
   - Generate new public key
   - Update in all environments

3. **Monitor email quota**
   - EmailJS free tier: 200 emails/month
   - Upgrade if needed

### Template Setup (Exact Format)

**Template Name:** `booking`

**Subject:**
```
New Babysitting Booking Request from {{parent_name}}
```

**Email Body:**
```
Hello,

You have received a new babysitting booking request!

=== PARENT INFORMATION ===
Name: {{parent_name}}
Email: {{from_email}}
Phone: {{phone}}
Address: {{address}}

=== CHILDREN INFORMATION ===
Number of Children: {{number_of_children}}
Names: {{children_names}}
Ages: {{children_ages}}

=== BOOKING DETAILS ===
Date: {{booking_date}}
Time: {{start_time}} - {{end_time}}

=== MEDICAL INFORMATION ===
Allergies: {{allergies}}
Medication: {{medication}}

=== SPECIAL REQUIREMENTS ===
{{special_requirements}}

=== ADDITIONAL NOTES ===
{{additional_notes}}

=== EMERGENCY CONTACT ===
{{emergency_contact}}

Please log in to your admin dashboard to manage this booking.

Best regards,
Little Lights Babysitting
```

---

## ☁️ Firebase Production Setup

### Security Rules

Update Firestore Security Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{document=**} {
      // Allow creation from web app
      allow create: if request.auth.uid != null || 
                       (request.resource.data.parentEmail != null && 
                        request.resource.data.parentPhone != null);
      
      // Only authorized admins can read/update/delete
      allow read, update, delete: if request.auth.uid != null;
    }
  }
}
```

### Enable Authentication

1. Go to Firebase Console
2. Authentication → Sign-in method
3. Enable Email/Password
4. Create admin account

### Database Indexing

1. Firestore → Indexes
2. Create index on `createdAt` (Descending)
3. This improves query performance

---

## ✅ Pre-Deployment Checklist

- [ ] All environment variables set
- [ ] EmailJS credentials valid
- [ ] Firebase project created and configured
- [ ] Firestore database initialized
- [ ] Security rules updated
- [ ] Admin password changed from default
- [ ] Contact email verified
- [ ] Domain purchased (optional)
- [ ] HTTPS enabled
- [ ] Performance tested
- [ ] Mobile responsiveness checked
- [ ] All links working
- [ ] Forms submitting
- [ ] Admin dashboard accessible

---

## 🔐 Security Checklist

- [ ] No hardcoded credentials
- [ ] Environment variables used
- [ ] `.env` files not in GitHub
- [ ] CORS configured
- [ ] Rate limiting enabled (if using backend)
- [ ] Admin password strong
- [ ] Firebase rules restrictive
- [ ] EmailJS quota monitored
- [ ] Error messages don't expose sensitive data
- [ ] HTTPS only

---

## 📊 Monitoring

### Vercel
- Analytics dashboard
- Function logs
- Environment variables visible

### Firebase
- Cloud Firestore usage
- Database size
- Document count

### EmailJS
- Email quota
- Failed emails
- Delivery reports

---

## 🆘 Troubleshooting

### Deployment fails
```bash
# Clear build cache
rm -rf node_modules .next dist
npm install
npm run build
```

### Environment variables not working
- Verify exact variable names (case-sensitive)
- Redeploy after adding variables
- Check platform documentation

### Emails not sending
- Verify EmailJS credentials
- Check quota in EmailJS dashboard
- Verify template ID matches
- Check browser console for errors

### Firebase connection issues
- Verify project ID
- Check security rules
- Enable Firestore API
- Verify API key permissions

---

## 📞 Support

- **Vercel Support:** https://vercel.com/support
- **Netlify Support:** https://support.netlify.com
- **Firebase Support:** https://firebase.google.com/support
- **EmailJS Support:** https://www.emailjs.com/docs/

---

## 🎉 You're Live!

Your Little Lights Babysitting website is now live in production with:

✅ Email notifications
✅ Cloud database
✅ Admin dashboard
✅ Real-time booking management
✅ Professional hosting
✅ Custom domain (optional)
✅ HTTPS security
✅ 99.9% uptime

Enjoy! 🌟
