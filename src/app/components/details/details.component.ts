import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie;
  movieGenre;
  movieSim;
  movieId;

  constructor(private api:ApiService, private route: ActivatedRoute, private location: Location, private http:HttpClient) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.params.movieId;

    this.api.getMovie(this.movieId).subscribe((data) => {
      console.log(data);
      this.movie = data;
      this.movieGenre = data['genres'];
      this.movieGenre.length = 1;
    });

    this.getSimilar().subscribe((dataSim)  =>{
      console.log(dataSim);
      this.movieSim = dataSim['results'];
      this.movieSim.length = 12;
    })
  }

  back(){
    this.location.back();
  }

  getSimilar(){
    return this.http.get(`https://api.themoviedb.org/3/movie/`+this.movieId+`/similar?api_key=1bf02f37eeb75841c3ef1e850a4a7719&language=en-US&page=1`);
  }

  refresh(){
    setTimeout(function(){
      location.reload();
    },200);
    setTimeout(function(){
      this.gotoTop();
    },300);
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


}
