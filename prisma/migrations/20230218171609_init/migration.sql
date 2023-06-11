-- CreateEnum
CREATE TYPE "MeasurementDevice" AS ENUM ('WST_1');

-- CreateTable
CREATE TABLE "Measurement" (
    "id" SERIAL NOT NULL,
    "deviceId" "MeasurementDevice" NOT NULL,
    "temperature" DECIMAL(65,30) NOT NULL,
    "humidity" DECIMAL(65,30) NOT NULL,
    "pressure" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Measurement_pkey" PRIMARY KEY ("id")
);
