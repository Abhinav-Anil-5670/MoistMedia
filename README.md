# MoistMedia

A backend project built with **Node.js**, **Express**, and **MongoDB** for a simple social-media-like application.  
It includes authentication, protected routes, image handling, and AI-powered caption generation.

---

## 🚀 Features
- **User Registration** with secure password hashing using `bcrypt`
- **Login** with JWT-based authentication
- **Protected Routes**: Only logged-in users can create posts
- **Create Post**: Uploads an image to **ImageKit** and generates an AI-based caption via the **Gemini API**
- **Token Storage**: JWT tokens are generated on login/registration and required for posting
- **Production-Ready Structure**: Clean and scalable file & folder organization

---

## 📂 Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Security**: bcrypt
- **File Storage**: ImageKit
- **AI Integration**: Gemini API (for caption generation)

---

## 🛠️ Installation & Setup
1. Clone this repository
   ```bash
   git clone <repo-url>
   cd MoistMedia
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a .env file in the root directory and configure the following:
   ```bash
    MONGO_URL=
    JWT_SECRET=
    GEMINI_API_KEY=
    IMAGEKIT_PUBLIC_KEY=
    IMAGEKIT_PRIVATE_KEY=
    IMAGEKIT_URL_ENDPOINT=
    ```
    
4. Start the server
   ```bash
   node server.js
   ```



