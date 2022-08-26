import { Module } from '@nestjs/common';
import { controllers } from '@/input/http/v1';
import { providers } from '@/core/usecase/provider';

@Module({
  imports: [],
  controllers,
  providers,
})
export class AppModule {}
