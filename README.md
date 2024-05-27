LMUxMesse_München-VR-Tour-Build-Git



### Instructions to Clone and Set Up the Project

1. **Clone the Repository**

   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/adwait9797/VR_Tour_final.git
   ```

2. **Navigate to the Project Directory**

   Change your directory to the project directory:

   ```bash
   cd VR_Tour_final
   ```

3. **Set Up the Backend**

   1. **Navigate to the Backend Directory**

      ```bash
      cd backend
      ```

   2. **Install Backend Dependencies**

      Run the following command to install the necessary dependencies:

      ```bash
      npm install
      ```

   3. **Set Up the Local MongoDB Database**

      Ensure you have MongoDB installed and running on your local machine. If not, follow the [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

      Create a database named `vr_tour_db` and a collection named `tours`.

   4. **Seed the Database (Optional)**

      If you have a seed script to populate the database with initial data, run it:

      ```bash
      node seed.js
      ```

   5. **Start the Backend Server**

      Start the backend server on port `5002`:

      ```bash
      node server.js
      ```

4. **Set Up the Frontend**

   1. **Navigate to the Frontend Directory**

      Open a new terminal window/tab and navigate to the `frontend` directory:

      ```bash
      cd frontend
      ```

   2. **Install Frontend Dependencies**

      Run the following command to install the necessary dependencies:

      ```bash
      npm install
      ```

   3. **Start the Frontend Development Server**

      Start the frontend development server on port `3000`:

      ```bash
      npm start
      ```

5. **Verify the Setup**

   - **Backend**: Open a web browser and navigate to `http://localhost:5002`. You should see a message indicating that the server is running.
   - **Frontend**: Open a web browser and navigate to `http://localhost:3000`. You should see the homepage with the "Start 360 Tour" button.

### Summary of Commands

```bash
# Clone the repository
git clone https://github.com/adwait9797/VR_Tour_final.git

# Navigate to the project directory
cd VR_Tour_final

# Set up the backend
cd backend
npm install
# Ensure MongoDB is running and create the necessary database and collections
# Optionally seed the database
node seed.js
# Start the backend server
node server.js

# Set up the frontend
cd ../frontend
npm install
# Start the frontend development server
npm start
```

### Notes

- **MongoDB**: Ensure MongoDB is installed and running on your local machine. Create the `vr_tour_db` database and `tours` collection if they don't exist.
- **Environment Variables**: If your project uses environment variables (e.g., database connection strings), ensure these are set up correctly on each teammate's machine. If needed, create a `.env` file with the necessary variables in the `backend` directory.

By following these instructions, your teammates should be able to clone the repository and set up the project on their local machines successfully. If any issues arise during the setup, ensure that the necessary software (Node.js, npm, MongoDB) is installed and configured correctly.
