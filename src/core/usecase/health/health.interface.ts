import { HealthResponse } from '@/core/usecase';

export interface IHealthUseCase {
  checkState(): Promise<HealthResponse>;
}
