import { Test, TestingModule } from '@nestjs/testing';

import { DBPools } from './DBPools.service';
import { Logger } from '@nestjs/common';

describe('DB_POOL_TEST', () => {
	let dbPools: DBPools;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			providers: [DBPools, Logger],
		}).compile();

		dbPools = app.get<DBPools>(DBPools);
	});


	describe('dbpool', () => {
		it('getgetDBApp()', async (done) => {
			const [rows, fileds] = await dbPools.getDBApp().execute('select 1');

			expect(rows).toHaveLength;
			done();
		});
		it('getDbLog', async (done) => {
			const [rows, fileds] = await dbPools.getDBLog().execute('select 1');
			expect(rows).toHaveLength;
			done();
		});
		it('getDbuser', async (done) => {
			const [rows, fileds] = await dbPools.getDBUser().execute('select 1');
			expect(rows).toHaveLength;
			done();
		});
	});
});
