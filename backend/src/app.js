
import cors from "cors"
import express from "express";
import cookieParser from "cookie-parser";
import "./cronJobs.js"
const app=express();

// ✅ Only allow these origins
// const allowedOrigins = ["https://e-bid-x.vercel.app"];

// app.use(cors({
//     origin: "*",
// credentials: true,
//     methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"]
//   }));
const allowedOrigins = [
  "http://localhost:5173",
  "https://e-bid-x.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

  
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//routes import

import userRouter from "./routes/user.routes.js";
import productCategoryRouter from "./routes/productCategory.routes.js";
import auctionRouter from "./routes/auction.routes.js";
import cityRouter from "./routes/city.routes.js";
import bidRouter from "./routes/bid.routes.js";
import notificationRouter from "./routes/notification.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import cartRouter from "./routes/cart.routes.js"



//routes declaration

app.use("/api/v1/users",userRouter);
app.use("/api/v1/product-categories",productCategoryRouter);
app.use("/api/v1/auctions",auctionRouter);
app.use("/api/v1/cities",cityRouter);
app.use("/api/v1/bids",bidRouter);
app.use("/api/v1/notifications",notificationRouter);
app.use("/api/v1/payments",paymentRouter);
app.use("/api/v1/cart", cartRouter)

// Health check route
app.get("/", (req, res) => {
    res.status(200).send("E-bidX backend is running 🚀");
  });
  

export {app}