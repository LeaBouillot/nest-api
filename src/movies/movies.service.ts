import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

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

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  delete(id: number): void {
    this.getById(id);
    this.movies.filter((movie) => movie.id !== +id);
  }

  update(id: number, updateData: UpdateMovieDto): Movie {
    const movie = this.getById(id);
    const updatedMovie = { ...movie, ...updateData };
    this.movies[this.movies.indexOf(movie)] = updatedMovie;
    return updatedMovie;
  }
}
