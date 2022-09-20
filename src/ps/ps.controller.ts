import { Body, Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

const logger = new Logger('Client-PS-Controller');

@Controller('ps')
export class PsController {
  constructor(@Inject('LOGGER_SERVICE') private readonly client: ClientProxy) {}

  @Get('catalogs')
  async findAll(@Body() params) {
    return this.client.send({ role: 'PS', cmd: 'find_all' }, params);
  }
}
