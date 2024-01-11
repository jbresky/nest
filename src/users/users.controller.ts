import { Body, Controller, Delete, Get, Param, Patch, Post, Query , ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post() // validates agains our DTO
    create(@Body(ValidationPipe) CreateUserDto: CreateUserDto ) {
        return this.usersService.create(CreateUserDto)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) UpdateUserDto: UpdateUserDto) {
        return this.usersService.update(id, UpdateUserDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
