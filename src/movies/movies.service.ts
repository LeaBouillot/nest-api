import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: string): Movie {
    return this.movies.find((movie) => movie.id === Number(id));
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  delete(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }
}
