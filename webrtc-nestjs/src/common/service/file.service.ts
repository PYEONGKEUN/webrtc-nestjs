import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FileService {
	constructor( private readonly logger: Logger ) {}

	// public insertFile(file: Express.Multer.File, scCode: number) {
	// 	const [fileSn, fileType] = file.filename.split('.');
	// 	this.daoFile.insertFile(fileSn, fileType, file.originalname, scCode);
	// }
}
