import * as config from 'config';

import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import mysqlType from 'mysql2/promise';

@Injectable()
export class DBPools implements OnModuleInit {
	private readonly dbUser: mysqlType.Pool;
	private readonly dbApp: mysqlType.Pool;
	private readonly dbLog: mysqlType.Pool;
	private readonly mysql = require('mysql2/promise');

	constructor(private readonly logger: Logger) {
		this.dbUser = this.initDBApp();
		this.dbApp = this.initDBLog();
		this.dbLog = this.initDBUser();
	}

	onModuleInit() {
		this.logger.log(`mysql2 has been initialized.`);
	}


	getDBApp = () => {
		return this.dbApp;
	};

	getDBLog = () => {
		return this.dbLog;
	};

	getDBUser = () => {
		return this.dbUser;
	};

	private initDBApp = () => {
		let dbPool;
		try {
			dbPool = this.mysql.createPool({
				host: config.get('dbUser.host'),
				port: config.get('dbUser.port'),
				database: config.get('dbUser.database'),
				// timezone: config.get("dbUser.timezone"),
				user: config.get('dbUser.user'),
				password: config.get('dbUser.password'),
				charset: config.get('dbUser.charset'),
				connectionLimit: config.get('dbUser.connectionLimit'),
				// acquireTimeout: config.get("dbUser.connectionLimit"),
			});
		} catch (err) {
			throw err;
		}
		return dbPool;
	};

	private initDBLog = () => {
		let dbPool;
		try {
			dbPool = this.mysql.createPool({
				host: config.get('dbApp.host'),
				port: config.get('dbApp.port'),
				database: config.get('dbApp.database'),
				// timezone: config.get("dbApp.timezone"),
				user: config.get('dbApp.user'),
				password: config.get('dbApp.password'),
				charset: config.get('dbApp.charset'),
				connectionLimit: config.get('dbApp.connectionLimit'),
				// acquireTimeout: config.get("dbApp.connectionLimit"),
			});
		} catch (err) {
			throw err;
		}
		return dbPool;
	};

	private initDBUser = () => {
		let dbPool;
		try {
			dbPool = this.mysql.createPool({
				host: config.get('dbLog.host'),
				port: config.get('dbLog.port'),
				database: config.get('dbLog.database'),
				// timezone: config.get("dbLog.timezone"),
				user: config.get('dbLog.user'),
				password: config.get('dbLog.password'),
				charset: config.get('dbLog.charset'),
				connectionLimit: config.get('dbLog.connectionLimit'),
				// acquireTimeout: config.get("dbLog.connectionLimit"),
			});
		} catch (err) {
			throw err;
		}
		return dbPool;
	};
}
