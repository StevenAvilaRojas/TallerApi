import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-componente-prueba',
  templateUrl: './componente-prueba.component.html',
  styles: []
})
export class ComponentePruebaComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;

  constructor(private GitSearchService: GitSearchService) { }
  ngOnInit() {
    this.searchQuery = 'Steven'
   this.displayQuery = this.searchQuery;
   this.gitSearch();
  }

  gitSearch =()=>{
    this.GitSearchService.gitSearch(this.searchQuery).then((response)=>{
      this.searchResults = response;
      this.displayQuery= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}
