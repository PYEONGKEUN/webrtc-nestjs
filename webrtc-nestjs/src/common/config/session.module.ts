import * as ConnectRedis from 'connect-redis';
import * as config from 'config';
import * as session from 'express-session';

import { NestSessionOptions, SessionModule } from 'nestjs-session';

import { Redis } from './redis.module';
import { RedisService } from 'nestjs-redis';

const RedisStore = ConnectRedis(session);

export const Session = SessionModule.forRootAsync({
	imports: [Redis],
	inject: [RedisService],
	useFactory: (redisService: RedisService): NestSessionOptions => {
		const redisClient = redisService.getClient();
		const store = new RedisStore({ client: redisClient as any });
		return {
			session: {
				store,
				secret: config.get('express.session.secret'),
				resave: false,
				saveUninitialized: false,
			},
		};
	},
});
