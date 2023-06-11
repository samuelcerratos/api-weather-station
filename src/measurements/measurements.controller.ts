import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { MeasurementDevice } from '@prisma/client';
import { CreateMeasurementDto } from './dtos/CreateMeasurement.dto';
import { FiltersMeasurementDto } from './dtos/FiltersMeasurement.dto';
import { MeasurementsService } from './measurements.service';

@ApiTags('Measurements')
@Controller({ path: 'measurements', version: '1' })
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @ApiQuery({ name: 'deviceId', enum: MeasurementDevice, required: false })
  @Get()
  findAll(@Query() filters: FiltersMeasurementDto) {
    return this.measurementsService.findAll(filters);
  }

  @Post()
  create(@Body() createMeasurementDto: CreateMeasurementDto) {
    return this.measurementsService.create(createMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) measurementId: number) {
    return this.measurementsService.remove(measurementId);
  }
}
