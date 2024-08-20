import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupApp } from './setup-app';
// import { ValidationPipe } from '@nestjs/common';

// Because of tsconfig, we can not just import { CookieSession } from cookie-session, so we have to do it this way
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(
  //   cookieSession({
  //     keys: ['uroskey'],
  //   }),
  // );

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );
  setupApp(app);
  await app.listen(3000);
}
bootstrap();
