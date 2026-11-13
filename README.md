# 🚗 AutoTrace.kg — Vehicle History Platform

AutoTrace.kg is a web-based vehicle history platform designed for users in Kyrgyzstan.

The website allows users to search for vehicle accident history using a Kyrgyzstan license plate number or VIN code. Users can also submit accident reports by uploading photos and describing vehicle damage.

All submitted reports must be reviewed by an administrator before appearing in the public vehicle history.

---

## 🌐 Project Overview

The main goal of AutoTrace.kg is to make buying and selling used cars more transparent by providing access to reported vehicle damage and accident information.

The platform connects vehicle owners, buyers, and people who want to share information about road accidents.

## ✨ Main Features

### 🔍 Vehicle Search
- Search vehicles using Kyrgyzstan license plate numbers.
- Search vehicles using a 17-character VIN code.
- View approved accident and damage reports.
- Check available vehicle history records.

### 📸 Submit Accident Reports
- Upload vehicle damage photographs.
- Enter the vehicle license plate number.
- Provide a VIN code (optional).
- Specify the accident date.
- Select the type of damage.
- Add a description of the incident.

### 🛡️ Admin Moderation
- View submitted reports.
- Review uploaded information.
- Approve valid reports.
- Reject inappropriate or incorrect submissions.
- Add approved reports to the vehicle history.

### 📱 Responsive Design
- Modern user interface.
- Mobile-friendly layout.
- Navigation between website sections.
- Responsive cards and forms.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Website functionality |
| Live Server | Local development and preview |

---

## 📁 Project Structure

```text
AutoTrace/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   └── car images
│
└── README.md
```

---

## 🚀 Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Open the project

Open the AutoTrace folder in Visual Studio Code.

### 3. Install Live Server

Install the Live Server extension from the VS Code Extensions Marketplace.

### 4. Run the website

1. Open `index.html`.
2. Right-click inside the editor.
3. Select **Open with Live Server**.

The website will open in your default browser.

---

## 🔄 How It Works

### Step 1 — Search for a Vehicle

Users enter a license plate number or VIN code into the search field.

### Step 2 — Submit Information

Users who have information about an accident can submit a report with photographs and an incident description.

### Step 3 — Admin Review

Administrators review submitted reports and decide whether the information is suitable for publication.

### Step 4 — Vehicle History

Approved reports become available through the vehicle search system.

---

## ⚠️ Current Project Status

**Version 1.0 — Frontend Prototype**

Currently implemented:
- Vehicle search interface.
- License plate and VIN search.
- Accident report submission form.
- Image upload and preview.
- Admin moderation interface.
- Responsive website layout.

### Current Limitations

This version is a frontend demonstration.

- Reports are stored temporarily in browser memory.
- Uploaded photographs are not permanently stored.
- There is no user registration system.
- Admin moderation is not protected by authentication.
- No external vehicle history database is connected.

Search results are limited to the demonstration data and reports submitted during the current browser session.

---

## 🔮 Future Improvements

Planned features for future versions:

- Backend integration using Node.js.
- Database integration using PostgreSQL.
- User registration and authentication.
- Secure administrator dashboard.
- Permanent cloud image storage.
- Public vehicle history pages.
- Detailed accident timelines.
- Vehicle report verification system.
- Advanced search and filtering.
- Official and authorized vehicle data integrations.

---

## 🔒 Privacy & Data Verification

AutoTrace.kg aims to provide a responsible vehicle history platform.

All user-submitted information should be reviewed before publication.

The platform should avoid publishing personal information, private documents, or unverified accusations.

An empty search result does not guarantee that a vehicle has never been involved in an accident.

---

## 👨‍💻 Project Information

**Project Name:** AutoTrace.kg

**Category:** Web Development / Automotive Technology

**Purpose:** Vehicle History and Accident Reporting Platform

**Target Market:** Kyrgyzstan

**Version:** 1.0

---

## 📄 License

This project is currently developed as an educational prototype.

All rights reserved.
