# Real-Time Chat Application with WebSocket

---

## Instructions

**Running the Server:**

1. Clone the repository to your local machine.
   git clone [chatApp](https://github.com/sarang-portfolio/chatApp.git)

2. Navigate to the chatApp directory.

3. Install dependencies using `npm install`.

4. Create an `.env` file and add a variable `PORT=3000` to run the server on that PORT.

5. Start the server in watch mode using `npm run start:dev`.

6. The WebSocket server will start running on port 3000.

---

## Architecture and Concurrency

The application consists of a WebSocket server built with Node.js, express.js, typescript on the server-side and a simple HTML and JavaScript client on the client-side.

**Server-Side:**

- The WebSocket server is implemented using the `ws` library in Node.js.
- It handles WebSocket connections from clients and broadcasts messages to all connected clients.
- Concurrency is managed through asynchronous event-driven programming in Node.js. The server can handle multiple client connections simultaneously without blocking the event loop.

**Client-Side:**

- The client is a single HTML file (`index.html`) [Client Repo](https://github.com/sarang-portfolio/sarang-portfolio.github.io/tree/main) that includes JavaScript code to establish a WebSocket connection with the server and handle chat interactions.
- Concurrency on the client-side is managed by the browser's event loop, allowing for real-time communication with the WebSocket server without blocking the user interface.

---

## Assumptions and Design Choices

1. **WebSocket Protocol**: The application uses the WebSocket protocol for real-time bidirectional communication between the server and clients. This choice enables low-latency communication suitable for a chat application.

2. **Minimalistic Client**: The client interface is kept simple and minimalistic to focus on functionality. It consists of basic HTML elements styled with CSS for a clean and intuitive user experience.

3. **No External Libraries**: The server is implemented using only built-in Node.js modules, and the client does not rely on external libraries or frameworks. This choice minimizes dependencies and simplifies deployment and maintenance.

4. **Scalability**: While the current implementation handles multiple concurrent connections, additional considerations may be needed for scalability in production environments.






    
   

