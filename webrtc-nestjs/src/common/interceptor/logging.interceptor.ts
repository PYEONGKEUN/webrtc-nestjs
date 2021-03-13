import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';

import { Request } from 'express';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	constructor(private readonly logger: Logger) {}

	intercept(context: ExecutionContext, next: CallHandler) {
		const req = context.switchToHttp().getRequest();
		const { statusCode } = context.switchToHttp().getResponse();
		const { originalUrl, method, params, query, body } = req;

		this.logger.log('Request [ ' + method + ' ]' + originalUrl + '- body : ' + JSON.stringify(body));

		const now = Date.now();
		return next
		  .handle()
		  .pipe(
			tap((data) => {
				this.logger.log(`Response ${statusCode} ${Date.now() - now}ms`)
				if(process.env.NODE_ENV == "development") console.log(data);
			}),
		  );
	}
}
