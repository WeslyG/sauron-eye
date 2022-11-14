import { Injectable } from "@nestjs/common";
import { Job, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.JobCreateInput): Promise<Job> {
    return this.prisma.job.create({
      data,
    });
  }

  findAll(): Promise<Job[]> {
    return this.prisma.job.findMany();
  }

  findOne(id: string): Promise<Job | null> {
    return this.prisma.job.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  // update(id: number, updateJobDto: UpdateJobDto) {
  //   return `This action updates a #${id} job`;
  // }

  remove(id: string): Promise<Job> {
    return this.prisma.job.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
