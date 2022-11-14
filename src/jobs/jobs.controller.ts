import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { Job, Prisma } from "@prisma/client";
import { JobsService } from "./jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() createJobDto: Prisma.JobCreateInput): Promise<Job> {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Job | null> {
    return this.jobsService.findOne(id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateJobDto: UpdateJobDto) {
  //   return this.jobsService.update(+id, updateJobDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.jobsService.remove(id);
  }
}
