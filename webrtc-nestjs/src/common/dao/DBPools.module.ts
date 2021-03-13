import { Global, Logger, Module } from '@nestjs/common';

import { DBPools } from './DBPools.service';

@Global()
@Module({
	providers: [DBPools, Logger],
	exports: [DBPools],
})
export class DBPoolModule {}
