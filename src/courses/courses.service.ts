import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCursoDto } from 'src/dto/create-curso.dto';
import { Course } from './entities/courses.entity';

@Injectable()
export class CoursesService {
    update(id: string, body: any) {
        throw new Error('Method not implemented.');
    }
    remove(id: string) {
        throw new Error('Method not implemented.');
    }

    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do framework NestJS",
            description: "Curso NestJS",
            tags: ["node,js", 'nestjs', 'javaScript'],
        },
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find((course: Course) => course.id === Number(id));
        if(!course) {
            throw new HttpException('Course id' + id+ 'not found', HttpStatus.NOT_FOUND)
        }
        return course;
    } 

    create(createCourseDTO: any)
    this.courses.push(CreateCursoDto);


    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id),
        );
        this.courses[indexCourse] = updateCourseDto;
    }

    removeEventListener(id: string) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id),
        );

        if(indexCourse >= 0) {
            this.courses.splice(indexCourse, deleteCount: 1)
        }
    }
}
