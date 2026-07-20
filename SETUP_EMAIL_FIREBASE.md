# EmailJS + Firebase Setup Guide for Little Lights Babysitting

## 🚀 Quick Setup

### Part 1: EmailJS Configuration (Email Notifications)

#### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. No credit card required for development

#### Step 2: Get Your Credentials
1. Go to **Account Settings** → Copy your **Public Key**
2. Go to **Email Services** → Create a new service:
   - Name: `Gmail` or your email provider
   - Select: `Gmail` (or your provider)
   - Connect your email account
   - Copy the **Service ID**

#### Step 3: Create Email Templates
1. Go to **Email Templates** → Create new template
   - Name: `booking`
   - Subject: `New Booking Request from {{parent_name}}`
   - Content:

```
New Booking Request

Parent Information:
- Name: {{parent_name}}
- Email: {{from_email}}
- Phone: {{phone}}

Children:
- Names: {{children_names}}
- Ages: {{children_ages}}
- Number: {{number_of_children}}

Booking Details:
- Date: {{booking_date}}
- Time: {{start_time}} - {{end_time}}
- Address: {{address}}

Medical Information:
- Allergies: {{allergies}}
- Medication: {{medication}}

Special Requirements:
{{special_requirements}}

Emergency Contact: {{emergency_contact}}

Additional Notes:
{{additional_notes}}
```

2. Copy the **Template ID**

#### Step 4: Update EmailJS in Code
In `src/services/emailService.ts`, update:

```typescript
const SERVICE_ID = 'service_xxxxxxxxxxxx' // Your Service ID
const TEMPLATE_ID = 'template_xxxxxxxxxxxx' // Your Template ID
const PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxx' // Your Public Key
```

---

### Part 2: Firebase Configuration (Database)

#### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Create Project**
3. Project name: `little-lights-babysitting`
4. Enable Google Analytics (optional)
5. Click **Create Project**

#### Step 2: Create Firestore Database
1. In Firebase Console → **Firestore Database**
2. Click **Create Database**
3. Choose: **Start in test mode** (for development)
4. Select location: Closest to you
5. Click **Create**

#### Step 3: Get Your Config
1. Go to **Project Settings** (gear icon)
2. Click **Your apps** → **</> Web**
3. Copy the config object
4. It looks like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "little-lights-xxxxx.firebaseapp.com",
  projectId: "little-lights-xxxxx",
  storageBucket: "little-lights-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxx"
}
```

#### Step 4: Update Firebase in Code
In `src/services/firebaseService.ts`, replace:

```typescript
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY', // Paste your apiKey
  authDomain: 'YOUR_AUTH_DOMAIN', // Paste your authDomain
  projectId: 'YOUR_PROJECT_ID', // Paste your projectId
  storageBucket: 'YOUR_STORAGE_BUCKET', // Paste your storageBucket
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID', // Paste your messagingSenderId
  appId: 'YOUR_APP_ID', // Paste your appId
}
```

#### Step 5: Create Firestore Rules
In Firebase Console → **Firestore Database** → **Rules**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{document=**} {
      allow create: if true; // Allow anyone to create bookings
      allow read: if request.auth.uid != null; // Only authenticated users can read
      allow update: if request.auth.uid != null;
      allow delete: if request.auth.uid != null;
    }
  }
}
```

Click **Publish**

---

## 📦 Install Dependencies

```bash
npm install emailjs-com firebase
```

## ✅ How It Works

### When a Booking is Made:

1. **Form Submitted** → User books via the website
2. **Email Sent** → EmailJS sends notification to `babysittinglittlelights@gmail.com`
3. **Database Saved** → Booking stored in Firebase Firestore
4. **Admin Dashboard** → Bookings visible in admin panel

## 🔒 Security Notes

- Keep your Firebase credentials secret
- Never commit credentials to GitHub
- Use environment variables for production
- Firestore rules prevent unauthorized data access

## 🚨 For Production

Create `.env.local` file:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx
VITE_FIREBASE_API_KEY=xxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxxx
VITE_FIREBASE_PROJECT_ID=xxxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
VITE_FIREBASE_APP_ID=xxxxx
```

Then update your service files to use:

```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

## 📞 Need Help?

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Firebase Docs:** https://firebase.google.com/docs
- **Firestore Docs:** https://firebase.google.com/docs/firestore

## 💡 What's Included

✅ Email notifications to admin when bookings are made
✅ All booking details stored in Firebase
✅ Admin dashboard to view all bookings
✅ Real-time booking status updates
✅ Secure Firestore database
✅ Scalable architecture

---

**Everything is configured and ready to use once you add your credentials!** 🎉
