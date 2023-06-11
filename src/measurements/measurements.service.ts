import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMeasurementDto } from './dtos/CreateMeasurement.dto';
import { FiltersMeasurementDto } from './dtos/FiltersMeasurement.dto';

@Injectable()
export class MeasurementsService {
  constructor(private prisma: PrismaService) {}

  async create(createMeasurementDto: CreateMeasurementDto) {
    const { deviceId, temperature, humidity, pressure } = createMeasurementDto;
    const result = await this.prisma.measurement.create({
      data: {
        deviceId,
        temperature: Math.round(temperature * 100) / 100,
        humidity: Math.round(humidity * 100) / 100,
        pressure: Math.round(pressure * 100) / 100,
      },
    });
    return result;
  }

  async findAll(filters: FiltersMeasurementDto) {
    const result = await this.prisma.measurement.findMany({
      where: {
        temperature: {
          gte: filters.fromTemperature,
          lte: filters.toTemperature,
        },
        humidity: {
          gte: filters.fromHumidity,
          lte: filters.toHumidity,
        },
        pressure: {
          gte: filters.fromPressure,
          lte: filters.toPressure,
        },
        createdAt: { gte: filters.fromDate, lte: filters.toDate },
      },
    });
    return result;
  }

  async remove(measurementId: number) {
    const result = await this.prisma.measurement.delete({
      where: { id: measurementId },
    });
    return result;
  }
}
