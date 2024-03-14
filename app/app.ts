import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import { createServer as createHttpServer } from 'http';
import { socketHandler } from './middlewares/socket.middleware';

export const startServer = () => {
	try {
		const app = express();
		const server = createHttpServer(app);
		app.use(helmet());
		app.use(
			cors({
				origin: ['https://chat-app-inky-kappa.vercel.app/'],
			})
		);
		app.use(json());

		socketHandler(server);

		const { PORT } = process.env;
		server.listen(PORT, () => {
			console.log(`SERVER RUNNING ON PORT: ${PORT}`);
		});
	} catch (error) {
		console.error(`COULD NOT START SERVER: ${error}`);
		process.exit(1);
	}
};
