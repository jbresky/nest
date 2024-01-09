import { Body, Controller, Delete, Get, Param, Patch, Post, Query , ParseIntPipe} from '@nestjs/common';
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

    @Post()
    create(@Body() CreateUserDto: CreateUserDto ) {
        return this.usersService.create(CreateUserDto)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() UpdateUserDto: UpdateUserDto) {
        return this.usersService.update(id, UpdateUserDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
