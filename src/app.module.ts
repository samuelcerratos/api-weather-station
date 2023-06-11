import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MeasurementsModule } from './measurements/measurements.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), MeasurementsModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
