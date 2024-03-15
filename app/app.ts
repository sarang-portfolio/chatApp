import cors from 'cors';
import express, { NextFunction, Request, Response, json } from 'express';
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
				origin: 'https://chatapp-1ich.onrender.com',
			})
		);
		app.use(json());

		socketHandler(server);

		app.get(
			'/checkHealthStatus',
			(req: Request, res: Response, next: NextFunction) => {
				try {
					res.send('HEALTH CHECK SUCCESSFULL!');
				} catch (error) {
					console.error(error);
				}
			}
		);

		const { PORT } = process.env;
		server.listen(PORT, () => {
			console.log(`SERVER RUNNING ON PORT: ${PORT}`);
		});
	} catch (error) {
		console.error(`COULD NOT START SERVER: ${error}`);
		process.exit(1);
	}
};
