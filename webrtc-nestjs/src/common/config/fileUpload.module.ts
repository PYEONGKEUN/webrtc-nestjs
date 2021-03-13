import * as config from 'config';

import { NextFunction, Request, Response } from 'express';

import { DynamicModule } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { StringBuilder } from 'typescript-string-operations';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

export const FileUploder: DynamicModule = MulterModule.register({
	storage: diskStorage({
		destination: config.get('multipartFiles.uploadPath'),
		filename: (req: Request, file, cb) => {
			const saveFileName = new StringBuilder();
			const fileTypeSplits = file.originalname.split('.');
			saveFileName.AppendFormat('{0}.{1}', uuidv4(), fileTypeSplits[fileTypeSplits.length - 1]);
			cb(null, saveFileName.ToString()); // 파일 저장시 UUIDV4로 저장
		},
	}),
});
