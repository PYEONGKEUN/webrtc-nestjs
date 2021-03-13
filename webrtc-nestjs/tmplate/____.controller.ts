
import { All , Controller, Get,   Inject, Logger, Post, Req, Res, Session, UploadedFiles, UseInterceptors } from '@nestjs/common';

import { Response, Request } from 'express';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';


@UseInterceptors(LoggingInterceptor)
@Controller("____")
export class ____Controller {
	constructor(
		private readonly logger: Logger,
	) {}

	@All('/ping')
	public ping(@Req() req: Request, @Res() res: Response) {
		res.send('pong');
	}

}