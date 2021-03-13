
import { All , Controller, Get,   Inject, Logger, Post, Req, Res, Session, UploadedFiles, UseInterceptors } from '@nestjs/common';

import { Response, Request } from 'express';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

import { FileService } from 'src/common/service/file.service';


@UseInterceptors(LoggingInterceptor)
@Controller()
export class LoginController {
	constructor(
		@Inject(Logger) private readonly logger: Logger,
		private readonly fileService: FileService,
	) {}

	@All('/ping')
	public ping(@Req() req: Request, @Res() res: Response) {
		res.send('pong');
	}

}