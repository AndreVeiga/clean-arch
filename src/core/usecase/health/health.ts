import { Injectable } from '@nestjs/common';
import { HealthResponse, IHealthUseCase } from '@/core/usecase';

@Injectable()
export class HealthUseCase implements IHealthUseCase {
  async checkState(): Promise<HealthResponse> {
    return { status: 'Success' };
  }
}
