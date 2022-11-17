import { Module } from '@nestjs/common';
import { PackageController } from './package/package.controller';

@Module({
  controllers: [PackageController]
})
export class PackagesModule {}
