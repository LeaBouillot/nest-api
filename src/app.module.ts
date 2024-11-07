import { Module } from '@nestjs/common';
import { MovieModule } from './movies/movies.module';
import { AppController } from './app.controller';
@Module({
  imports: [MovieModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
