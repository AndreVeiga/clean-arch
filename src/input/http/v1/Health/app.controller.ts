import { Controller, Get } from '@nestjs/common';
import { HealthUseCase } from '@/core/usecase';

@Controller()
export class AppController {
  constructor(private readonly healthUseCase: HealthUseCase) {}

  @Get()
  getHello() {
    return this.healthUseCase.checkState();
  }
}
