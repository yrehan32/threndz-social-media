import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  // If the MONGODB_URL environment variable is not set
  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");

  // If already connected
  if (isConnected) return console.log("Already connected to DB");

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
