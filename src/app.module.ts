import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { PsController } from './ps/ps.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'LOGGER_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [AppController, PsController],
  providers: [],
})
export class AppModule {}
