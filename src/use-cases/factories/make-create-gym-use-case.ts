import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymsUseCase() {
  const checkInsRepository = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(checkInsRepository)

  return useCase
}
