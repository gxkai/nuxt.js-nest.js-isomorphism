import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// tslint:disable-next-line: no-implicit-dependencies
import Consola from 'consola';
import config from '../../nuxt.config';
import { ApplicationModule } from './AppModule';
import NuxtServer from './common/nuxt/CommonNuxtServer';
import { NuxtFilter } from './common/nuxt/CommonNuxtFilter';
import configService from '../client/core/service/ServiceConfig';
import { ConfigDefault } from '../../config/ConfigDefault';

// tslint:disable-next-line:completed-docs
declare const module: any;

/**
 * bootstrap
 *
 */
// tslint:disable-next-line:typedef
async function bootstrap() {
	const { host, port } = config.env;
	const serverPort: number = process.env.PORT || port;

	const nuxt: any = await NuxtServer.getInstance().run(
		config.dev ? !module.hot._main : true
	);
	const server: any = await NestFactory.create(ApplicationModule);
	const configer: ConfigDefault = configService.getConfig();

	server.useGlobalFilters(new NuxtFilter(nuxt));
	server.useGlobalPipes(new ValidationPipe());
	server.setGlobalPrefix(configer.getGlobalPrefix());
	await server.listen(serverPort, host, () => {
		Consola.ready({
			message: `Server listening on http://${host}:${serverPort}`,
			badge: true
		});
	});

	if (config.dev && module.hot) {
		module.hot.accept();
		module.hot.dispose(() => server.close());
	}
}

bootstrap();
