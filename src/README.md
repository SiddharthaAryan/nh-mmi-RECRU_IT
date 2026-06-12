# NH MMI Recruitment Portal

Firestore-only recruitment portal for MMI Narayana Health Raipur.

## Routes

- `/` Candidate application form
- `/admin` HR dashboard login

## Current free-plan architecture

- Firebase Auth for HR login
- Firestore for candidate details
- CV is uploaded as JPG/PNG image, compressed in browser, and stored in Firestore
- Firebase Storage is not required

## Firebase setup

1. Enable Firestore Database
2. Enable Authentication → Email/Password
3. Create HR user with email: aryansiddhartha03@gmail.com
4. Paste `firestore.rules` content in Firestore Rules and publish

## Deploy

Install dependencies and build:

```bash
npm install
npm run build
```

Deploy to Firebase Hosting:

```bash
firebase deploy
```
