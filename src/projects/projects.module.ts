// src/projects/projects.module.ts
import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // <-- IMPORTE AQUI

@Module({
  imports: [PrismaModule], // <-- ADICIONE AQUI
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
