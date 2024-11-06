import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
constructor(private readonly moviesService: MoviesService){}

  @Get()
  getAll() :Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string):Movie {
    return this.moviesService.getById(id);
  }

  @Post()
  create(@Body() MovieData) {
    this.moviesService.create(MovieData);
    return 'movie created successfully';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.moviesService.delete(id);
    return 'Movie deleted successfully';
  }

  @Put(':id')
  update(@Body) {
    return 'movie with';
  }
}
