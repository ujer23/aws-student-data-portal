# aws-student-data-portal

A full-stack serverless web app to **save and view student data** using AWS Lambda, API Gateway, DynamoDB, and S3.

---

## 🚀 Features

- 📄 Add and view student records (Student ID, Name, Class, Age)
- ⚙️ Built using AWS Lambda functions (Python) and API Gateway
- 💾 Stores data securely in DynamoDB
- 🌐 Hosted on Amazon S3 (static website hosting)
- 🔒 CORS-enabled for secure cross-origin requests

---

## 🛠️ Tech Stack

- **Frontend:** HTML, JavaScript, jQuery
- **Backend:** AWS Lambda (Python)
- **API Gateway:** REST API
- **Database:** DynamoDB
- **Hosting:** Amazon S3

---

## 📂 Project Structure

```
aws-student-data-portal/
│
├── index.html              # Frontend form and table view
├── scripts.js              # JS code for API calls (POST and GET)
│
├── insertStudentData.py    # Lambda function to insert data into DynamoDB
├── getStudents.py          # Lambda function to retrieve data from DynamoDB
│
├── README.md               # Project overview and screenshots
```

---

## 🧪 How It Works

1. User enters student info on the HTML form.
2. Data is sent via API Gateway to the `insertStudentData.py` Lambda.
3. Data is stored in DynamoDB table `studentData`.
4. On "View all students", frontend calls `getStudents.py` Lambda.
5. Data is fetched and shown in the table on the webpage.

---

## 📸 Screenshots

### 🔹 Hosted Web App (S3)
![S3 Hosted Website](https://github.com/user-attachments/assets/265cb3f0-4b2c-4114-b4df-69e9e35f7519)

### 🔹 Lambda Function: `insertStudent`
![insertStudent Lambda](https://github.com/user-attachments/assets/04f2cbc6-29f5-4353-a345-580c214d6029)

### 🔹 Lambda Function: `getStudents`
![getStudent Lambda](https://github.com/user-attachments/assets/fb2413c6-1c0d-46da-a07c-9ae0d5c5aa2b)

### 🔹 API Gateway Configuration
![API Gateway](https://github.com/user-attachments/assets/1b1ab186-54e7-4700-857f-e6ee8ce50ab6)

### 🔹 DynamoDB Table with Sample Data
![DynamoDB Table](https://github.com/user-attachments/assets/cfa40a8f-475b-4c99-a5c4-14712c304a08)

### 🔹 Project Architecture Diagram
![Architecture](https://github.com/user-attachments/assets/3468d1a1-b059-4fca-8155-e5446b319803)

---

## 🔗 Demo

👉 **Live Site (Hosted on S3):** _[Add your S3 website link here]_  
👉 **GitHub Repo:** [https://github.com/ujer23/aws-student-data-portal](https://github.com/ujer23/aws-student-data-portal)

---

## 👨‍💻 Author

**Ujer Kazi**  
AWS Cloud & Serverless Developer  
🔗 [LinkedIn](https://www.linkedin.com/in/ujer-kazi/)

---

## 📜 License

This project is licensed under the MIT License.
