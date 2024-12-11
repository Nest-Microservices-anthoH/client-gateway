import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';
import { HealthCheckController } from './health-check.controller';

@Module({
  controllers: [HealthCheckController],
  providers: [],
  imports: [NatsModule],
})
export class HealthCheckModule {}
