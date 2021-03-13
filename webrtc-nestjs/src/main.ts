import * as config from 'config';

import { AppModule } from './app.module';
import { LocationDataUpdaterService } from './common/util/locationDataUpdater.service';
import { Logger } from '@nestjs/common';
import { LoggerCreater } from './common/config/logger.create';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		logger: LoggerCreater,
	});

	const locationDataUpdater = app.get(LocationDataUpdaterService);
	locationDataUpdater.updateData();

	// app.useGlobalPipes( new ValidationPipe() );
	// app.useGlobalGuards(new RolesGuard());

	app.useStaticAssets(join(__dirname, '..', '/resources/static'), {
		prefix: '/',
	});

	// app.setViewEngine('ejs');

	// CORS 처리 session 사용도 허용
	app.enableCors({
		credentials: true,
		origin: true
	});
	
	await app.listen(config.get('express.port'));
	
	if(process.env.NODE_APP_INSTANCE != undefined){
		console.log("server in on "+config.get("express.port"));
		console.log("log path : "+config.get("logger.path"));
	}else{
		console.log(process.env.NODE_APP_INSTANCE+": server in on "+config.get("express.port"));
		console.log(process.env.NODE_APP_INSTANCE+": log path : "+config.get("logger.path"));
	}


	if(process.env.NODE_ENV == "poduction"){
		console.log("on production mod it will not logging on console");
	}

	// shutdown시 시그널 처리
	app.enableShutdownHooks();
}
bootstrap();
