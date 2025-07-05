# aws-student-data-portal

A full-stack serverless web app to **save and view student data** using AWS Lambda, API Gateway, DynamoDB, S3, and CloudFront.

---

## 🚀 Features

- 📄 Add and view student records (Student ID, Name, Class, Age)
- ⚙️ Built using AWS Lambda functions (Python) and API Gateway
- 💾 Stores data securely in DynamoDB
- 🌐 Hosted on Amazon S3 with **CloudFront CDN**
- 🔒 CORS-enabled for secure cross-origin requests
- ⚡ Fast and globally distributed via CloudFront

---

## 🛠️ Tech Stack

- **Frontend:** HTML, JavaScript, jQuery  
- **Backend:** AWS Lambda (Python)  
- **API Gateway:** REST API  
- **Database:** DynamoDB  
- **Hosting:** Amazon S3 + **CloudFront (CDN)**

---

## 📂 Project Structure

```
aws-student-data-portal/
│
├── frontend/
│   ├── index.html             # Web UI for input and table
│   ├── scripts.js             # JS for GET and POST requests
│
├── lambda/
│   ├── insertStudentData.py   # Lambda to insert student record
│   └── getStudents.py         # Lambda to fetch all students
│
├── assets/                    # Optional folder for images/docs
│
└── README.md                  # Project documentation
```

---

## 🧪 How It Works

1. User enters student info on the HTML form.
2. Data is sent via API Gateway to `insertStudentData.py` Lambda.
3. Data is saved into the `studentData` table in DynamoDB.
4. On clicking “View all Students,” the frontend calls `getStudents.py` Lambda.
5. All records are fetched and displayed.
6. The website is hosted on **S3** and accelerated globally with **CloudFront**.

---

## 📸 Screenshots

### 🧾 1. Project Folder Structure
![Folder Structure](https://github.com/user-attachments/assets/47e44eb4-cce2-44c5-b695-3ff021c1ad0b)

### 🌐 2. Web App UI (CloudFront + S3)
![Web App](https://github.com/user-attachments/assets/61fd776e-4dc1-482b-99ec-c3f9c871b2c0)

### ⚙️ 3. API Gateway Configuration
![API Gateway](https://github.com/user-attachments/assets/4ae72d89-8f7f-450b-8932-6b717cd0954d)

### 🔁 4. Lambda Function: `getStudents`
![Lambda Get](https://github.com/user-attachments/assets/77a787f9-9615-4888-8a8f-7adf0a673d4a)

### 📝 5. Lambda Function: `insertStudentData`
![Lambda Insert](https://github.com/user-attachments/assets/1366x680-insertstudentdata.png)

### 💾 6. DynamoDB Table
![DynamoDB](https://github.com/user-attachments/assets/4c067a05-2e26-4f56-8568-131577d7185f)

---

## 🔗 Demo

👉 **Live Site (via CloudFront):** _[Paste your CloudFront URL here]_  
👉 **GitHub Repo:** [https://github.com/ujer23/aws-student-data-portal](https://github.com/ujer23/aws-student-data-portal)

---

## 👨‍💻 Author

**Ujer Kazi**  
AWS Cloud & Serverless Developer  
🔗 [LinkedIn](https://www.linkedin.com/in/ujer-kazi/)

---

## 📜 License

This project is licensed under the MIT License.
