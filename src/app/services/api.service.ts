import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apikey = "1bf02f37eeb75841c3ef1e850a4a7719";
  language = "language=en-US";

  constructor(private http:HttpClient) { }

  public getGenres(){
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=`+this.apikey+`&`+this.language);
  }

  public getSort(sort){
    return this.http.get(`https://api.themoviedb.org/3/movie/`+sort+`?api_key=`+this.apikey+`&`+this.language+`&page=1`);
  }

  public getList(generoId,sort,page){
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=`+this.apikey+`&`+this.language+`&sort_by=`+sort+`&page=`+page+`&with_genres=`+generoId);
  }

  public getMovie(movieId){
    return this.http.get(`https://api.themoviedb.org/3/movie/`+movieId+`?api_key=`+this.apikey+`&`+this.language);
  }

  public getSearch(name):Promise<any>{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=`+this.apikey+`&`+this.language+`&query=${name}&page=1`).toPromise();
  }
}
