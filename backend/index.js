// Import required modules
import express from "express"; // Express is a web framework for building server-side applications.
import cors from "cors"; // CORS (Cross-Origin Resource Sharing) middleware allows cross-origin requests.
import Router from "./routes/routes.js"; // Import custom routes for handling application-specific endpoints.

// Initialize the Express application
const app = express();

/**
 * Middleware to parse JSON request bodies.
 * Allows the server to handle JSON data sent in requests (e.g., API calls).
 */
app.use(express.json());

/**
 * Middleware to enable Cross-Origin Resource Sharing (CORS).
 * CORS allows the server to accept requests from different domains, which is especially important for APIs.
 * Without this, browsers might block requests due to security restrictions.
 */
app.use(cors());

/**
 * Set up custom routes.
 * All application-specific routes are defined in the imported `Router`.
 * These routes handle requests and responses for various endpoints.
 */
app.use(Router);

/**
 * Error handling middleware.
 * Captures errors that occur in the application and sends a 500 status response to the client.
 * Logs the error stack to the server console for debugging.
 */
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send("Something went wrong :("); 
});

/**
 * Start the server on the specified port.
 * Listens for incoming requests on port 5000 and logs a message indicating that the server is running.
 */
app.listen(5000, () => {
  console.log("Server running successfully");
});
