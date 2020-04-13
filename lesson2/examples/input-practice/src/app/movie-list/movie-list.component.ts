import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle : string){
     /*
     if(newTitle !== '' && !this.movies.includes(newTitle)){
      this.movies.push(newTitle);
     }
     */
     let errorMsg = "";
     if(newTitle === ""){
       errorMsg = "Please enter a movie title";
     }
     else if(this.movies.includes(newTitle)){
       errorMsg = `${newTitle} is already in your movie list.`;
     }
     else{
       this.movies.push(newTitle);
     }
     return errorMsg;   // TODO: What if we used a try-catch block?
   }
}
