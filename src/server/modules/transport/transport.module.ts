import { Module } from '@nestjs/common';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.service';

/**
 * 中转模块
 */
@Module({
	imports: [],
	controllers: [TransportController],
	providers: [TransportService]
})
export class TransportModule {
	constructor() {
		// hole
	}
}