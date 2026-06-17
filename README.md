
# Project_Hotel_Booking_System 
Project Description :
GuestGuru is a full-stack hotel booking web application where users can view available rooms, select booking dates, and book rooms. 
It also supports user authentication (login/register).

🚀 Tech Stack
#Frontend
React.js
Bootstrap
Ant Design (Date Picker)
Axios
#Backend
Node.js
Express.js
MongoDB
Mongoose

📁 Project Structure

client/
 ├─ src/
 │   ├─ components/
 │   ├─ screens/
 │   ├─ App.js


server/
 ├─ models/
 ├─ routes/
 ├─ db.js
 ├─ server.js

 ✨ Features
User Registration & Login
View All Rooms
Room Details Modal
Date Range Selection
Room Booking System
Booking Price Calculation
Payment Simulation (Mock)

🏨 Booking Flow
User selects date range
Clicks "Book Now"
Booking screen opens
Total days calculated
Total amount calculated
Click "Pay Now"
Booking stored in database

📡 API Endpoints
POST /api/users/register
POST /api/users/login
GET /api/rooms/getallrooms
GET /api/rooms/getroombyid/:id
POST /api/bookings/bookroom

🛠️ How to Run Project
# Frontend
cd client
npm install
npm start

# backend
cd server
npm install
node server.js







