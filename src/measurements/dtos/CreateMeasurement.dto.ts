import { MeasurementDevice } from '@prisma/client';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class CreateMeasurementDto {
  /**
   * Identifier of the measuring device
   * @example 'WST_1'
   */
  @IsEnum(MeasurementDevice)
  @IsNotEmpty()
  @IsDefined()
  deviceId: MeasurementDevice;

  /**
   * Temperature in degrees Celsius [°C]
   * @example 24.76
   */
  @Min(-40)
  @Max(85)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  temperature?: number;

  /**
   * Relative humidity percentage
   * @example 62.01
   */
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  humidity?: number;

  /**
   * Atmospheric pressure [hPa]
   * @example 1004.55
   */
  @Min(300)
  @Max(1100)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  pressure?: number;

  /**
   * CO2 concentration [ppm]
   * @example 404.78
   */
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  co2?: number;

  /**
   * Gas resistance for IAQ [Kohms]
   * @example 1004.55
   */
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  iaq?: number;

  /**
   * NO2 concentration [ppm]
   * @example 1004.55
   */
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  no2?: number;
}
