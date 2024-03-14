import WebSocket from 'ws';
import { Server as HttpServer } from 'http';

// Array to store WebSocket clients
const clients: WebSocket[] = [];

// Function to handle WebSocket connections
export const socketHandler = (server: HttpServer) => {
	// Create a WebSocket server instance
	const wss = new WebSocket.Server({ server });

	// Event listener for new WebSocket connections
	wss.on('connection', (ws: WebSocket, req) => {
		const origin = req.headers.origin;
		if (origin === 'https://chat-app-inky-kappa.vercel.app/') {
			console.log('Client connected!');
		} else {
			ws.close();
		}

		// Add the new client to the clients array
		clients.push(ws);

		// Event listener for incoming messages from clients
		ws.on('message', (message: WebSocket.Data) => {
			// Broadcast the received message to all clients
			broadcastMessage(message.toString(), ws);
		});

		// Event listener for client disconnection
		ws.on('close', () => {
			console.log('Client disconnected!');
			// Remove the disconnected client from the clients array
			const index = clients.indexOf(ws);
			if (index !== -1) {
				clients.splice(index, 1);
			}
		});

		// Event listener for WebSocket errors
		ws.on('error', (error: Error) => {
			console.error('WebSocket error:', error);
		});
	});

	// Function to broadcast a message to all clients except the sender
	const broadcastMessage = (message: string, sender: WebSocket) => {
		clients.forEach((client) => {
			if (client !== sender && client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	};

	// Log a message indicating that the WebSocket server has been initialized
	console.log('WebSocket server initialized.');
};
