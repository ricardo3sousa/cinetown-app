import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list;
  genreId;
  genreName;

  sort = "popularity.desc";
  page = 1;
  pages:Array<number>;

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.genreId = this.route.snapshot.params.generoId;
    this.genreName = this.route.snapshot.params.generoNome;
    this.getData();
  }

  getData(){
    this.api.getList(this.genreId,this.sort,this.page).subscribe((data)=>{
      console.log(data);
      this.list = data['results'];
      this.pages = new Array(data['total_pages'] = 10);
      this.list.length = 18;
    });
  }

  getSort(c){
    this.sort = c;
    this.page = 1;
    this.ngOnInit();
  }

  setPage(i){
    this.page = i;
    this.ngOnInit();
    this.gotoTop();
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
