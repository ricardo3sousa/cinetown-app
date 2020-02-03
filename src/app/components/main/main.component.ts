import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  list;
  sortTitle = "popular";
  categories = "popular";
  
  page;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getSort(this.categories).subscribe((data)=>{
      console.log(data);
      this.list = data['results'];
      this.page = data['page'];
      this.list.length = 18;
    })
  }

  getSort(event){
      this.categories = event.target.value;
      this.sortTitle = event.target.name;
      this.ngOnInit();
  }

}
