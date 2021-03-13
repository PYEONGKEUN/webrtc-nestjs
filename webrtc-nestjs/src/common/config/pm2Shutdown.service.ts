import { Injectable, OnApplicationShutdown } from "@nestjs/common";

@Injectable()
export class Pm2Shutdown implements OnApplicationShutdown {
  onApplicationShutdown() {
    process.on('SIGINT', () => {
      process.exit(1);
    });
  }
}