import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  people:Array<any>=[];

  // send request and wait for res --> console.log(res)
  constructor() { 
  }
  
  ngOnInit(): void {
    // wait -> 35mins
    fetch("http://localhost:4200/assets/data.json")

    .then((res:any)=>{
      console.log(res)
      let r = res.json();
      return r;
    })
    .then((data:any)=>{
      console.log(data);
      this.people = data;
    })

    .catch((err:any)=>{
      console.log("some error occurred")
      console.log(err)
    })

  }

}
