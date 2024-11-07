import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie not found with id ${id}`);
    }
    return movie;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: number) {
    this.getById(id);
    this.movies.filter((movie) => movie.id !== id);
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getById(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
