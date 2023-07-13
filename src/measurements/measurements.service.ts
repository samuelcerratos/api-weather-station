import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMeasurementDto } from './dtos/CreateMeasurement.dto';
import { FiltersMeasurementDto } from './dtos/FiltersMeasurement.dto';

@Injectable()
export class MeasurementsService {
  constructor(private prisma: PrismaService) {}

  async create(createMeasurementDto: CreateMeasurementDto) {
    const { deviceId, temperature, humidity, pressure, co2, no2, iaq } =
      createMeasurementDto;
    const result = await this.prisma.measurement.create({
      data: {
        deviceId,
        temperature: temperature
          ? Math.round(temperature * 100) / 100
          : undefined,
        humidity: humidity ? Math.round(humidity * 100) / 100 : undefined,
        pressure: pressure ? Math.round(pressure * 100) / 100 : undefined,
        co2: co2 ? Math.round(co2 * 100) / 100 : undefined,
        no2: no2 ? Math.round(no2 * 100) / 100 : undefined,
        iaq: iaq ? Math.round(iaq * 100) / 100 : undefined,
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
