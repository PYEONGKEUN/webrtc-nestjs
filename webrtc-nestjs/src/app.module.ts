import { Global, Logger, Module } from '@nestjs/common';

import { DBPoolModule } from './common/dao/DBPools.module';
import { FileUploder } from './common/config/fileUpload.module';
import { LoginModule } from './login/login.module';
import { Pm2Shutdown } from './common/config/pm2Shutdown.service';
import { Session } from './common/config/session.module';

@Global()
@Module({
	imports: [
		//configs
		Session,
		FileUploder,

		//controllers
		LoginModule,

		//db
		DBPoolModule,
	],
	providers: [
		//configs
		Logger,
		Pm2Shutdown
	],
})
export class AppModule {}
