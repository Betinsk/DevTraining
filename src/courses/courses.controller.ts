import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateCursoDto } from 'src/dto/create-curso.dto';
import { UpdateCursoDto } from 'src/dto/update-curso.dto';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {
    
        
    }


    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() createCurseDto: CreateCursoDto) {
        return this.courseService.create(CreateCursoDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
     return this.courseService.update(id, updateCursoDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
       return this.courseService.remove(id)
    }

}

