import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  genres;
  search;
  list;
  window:Window;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getGenres().subscribe((data)=>{
      console.log(data);
      this.genres = data['genres'];
    })
  }

  showSearch(event){
    //variavel usada na url
    const filme = event.target.value;
    //variavel usada na view
    this.search = event.target.value;

    this.api.getSearch(filme).then(res => {
      console.log(res);
      this.list = res['results'];
      this.list.length = 16;
    })

    if(event.target.value == ''){
      this.ngOnInit();
    }
  }

  refresh(){
    setTimeout(function(){
      location.reload();
    },200);
  }


}
