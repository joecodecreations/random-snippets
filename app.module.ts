import { Module } from '@nestjs/common';
import { ExternalModule } from './modules/external/external.module';

@Module({
  imports: [
    ExternalModule,
    // other modules
  ],
  // providers, controllers, etc
})
export class AppModule {}