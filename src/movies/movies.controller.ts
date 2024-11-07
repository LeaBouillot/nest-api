import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Movie {
    return this.moviesService.getById(id);
  }

  @Post()
  create(@Body() MovieData: CreateMovieDto) {
    return this.moviesService.create(MovieData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(id, updateData);
  }
}
