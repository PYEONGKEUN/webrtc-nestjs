import 'winston-daily-rotate-file';

import * as config from 'config';

import { WinstonModule, utilities as nestWinstonCreaterUtilities } from 'nest-winston';
import { format, transports } from 'winston';

// import fs from 'fs';

let logDir = "";
if(process.env.NODE_APP_INSTANCE != undefined){
	logDir = config.get('logger.path')+ "/"+process.env.NODE_APP_INSTANCE;
}else{
	logDir = config.get('logger.path');
}


const myFormat = format.combine(format.timestamp(), nestWinstonCreaterUtilities.format.nestLike());

const dailyRotateFileTransport = new transports.DailyRotateFile({
	level: 'debug',
	filename: `${logDir}/vrsports-%DATE%.log`,
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '20m',
	maxFiles: '14d',
	format: myFormat,
});

export const LoggerCreater = WinstonModule.createLogger({
	level: config.get('logger.logLevel'),
	format: myFormat,
	transports: [
		new transports.Console({
			level: config.get('logger.logLevel'),
			format: myFormat,
		}),
		dailyRotateFileTransport,
	],
});
