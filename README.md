# 🛒 E-bidX – A Next-Gen Online Auction Marketplace

E-bidX is a full-stack web application 💻 that enables users to participate in real-time auctions ⏱️ for various items 📦. Built with the MERN stack ⚙️ and powered by WebSockets 🔌, E-bidX ensures smooth, live bidding experiences. The platform allows users to list products 📝, join auctions 👥, and place bids 💸 in real-time 🚀.

## 🔧 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time-bidding**: Socket.IO (WebSockets).
- **Authentication**: JWT (JSON Web Tokens) Improves Security⚙️.
- **Payments**: Stripe Integration
- **File Uploads**: Cloudinary

## ✨ Key Features

- 🔐 **User Authentication**: Secure login and registration with JWT.
- 🧾 **Product Listing**: Users can create and manage item listings.
- 🔄 **Real-Time Bidding**: Seamless live bidding experience using WebSockets.
- 💳 **Secure Payments**: Integrated Stripe for handling transactions.
- 📸 **Image Uploads**: Product image uploads via Cloudinary.
- 📈 **Bid Management**: Tracks highest bids and bid history.
- 🛡️ **Payment Verification**: Only verified users can participate in bidding.


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Udaybari324/E-bidX.git
cd E-bidX
```


### 2. Set up the backend
 ## go to backend directory 
```bash
cd backend
```
## then Run the following:
```bash
npm install
npm start
```
### 3. Set up the frontend
 ## go to frontend directory 
```bash
cd ../frontend
```
```bash
npm install
npm run dev
```
### 4. Add Environment Variables
 # Create a .env file inside the backend/ folder:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```
#🔒 Note:Keep this .env file private. Add it to .gitignore.

## 🔥 Live Demo

👉 [Click here to view the live demo](https://e-bid-x.vercel.app)

---

## 🙋‍♂️ About the Author

**Uday Bari**  
🔗 GitHub: [@Udaybari324](https://github.com/Udaybari324)  
💼 LinkedIn: [Linkedin](https://your-portfolio-link.com)  
📫 Email: [udaybari17@gmail.com](udaybari17@gmail.com)  
🛠️ Passionate about building real-time, scalable web applications using modern JavaScript stacks.



## 📄 License
**This project is licensed under the MIT License — feel free to use it, modify it, and share it.**









