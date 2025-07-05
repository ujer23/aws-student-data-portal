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
- **Hosting:** Amazon S3 + CloudFront (CDN)

---

## 📂 Project Structure

```
aws-student-data-portal/
│
├── index.html               # Main frontend HTML page
├── scripts.js               # JS for saving & fetching student data
├── insertStudentData.py     # Lambda function to insert student
├── getStudents.py           # Lambda function to get all students
├── README.md                # Project documentation
```

🧾 View the full project structure and setup screenshots 👉  
📎 [Project Screenshot Gallery](https://github.com/ujer23/aws-student-data-portal/issues/1)

---

## 🧪 How It Works

1. User fills out student details on the web form.
2. A POST request is sent to API Gateway, triggering the `insertStudentData` Lambda.
3. Data is inserted into the DynamoDB `studentData` table.
4. When "View all students" is clicked, a GET request triggers `getStudents` Lambda.
5. All data is fetched and shown on the site.
6. The website is hosted on **Amazon S3**, distributed globally via **CloudFront**.

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
