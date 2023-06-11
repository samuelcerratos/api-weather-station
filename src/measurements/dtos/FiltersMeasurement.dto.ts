import { MeasurementDevice } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  MaxDate,
  Min,
  MinDate,
} from 'class-validator';

export class FiltersMeasurementDto {
  /**
   * From date [ISO 8601]
   */
  @MinDate(new Date('2023-01-01'))
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Date)
  fromDate?: Date;

  /**
   * To date [ISO 8601]
   */
  @MaxDate(new Date())
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Date)
  toDate?: Date;

  /**
   * Temperature greater than or equal to [ºC]
   */
  @Min(-40)
  @Max(85)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  fromTemperature?: number;

  /**
   * Temperature lower than or equal to [ºC]
   */
  @Min(-40)
  @Max(85)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  toTemperature?: number;

  /**
   * Percent relative humidity greater than or equal to
   */
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  fromHumidity?: number;

  /**
   * Percent relative humidity lower than or equal to
   */
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  toHumidity?: number;

  /**
   * Atmospheric pressure greater than or equal to [hPa]
   */
  @Min(300)
  @Max(1100)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  fromPressure?: number;

  /**
   * Atmospheric pressure lower than or equal to [hPa]
   */
  @Min(300)
  @Max(1100)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  toPressure?: number;

  /**
   * Identifier of the measuring device
   */
  @IsEnum(MeasurementDevice)
  @IsNotEmpty()
  @IsOptional()
  deviceId?: MeasurementDevice;
}
