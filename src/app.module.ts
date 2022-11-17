import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [UserModule, PackagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
