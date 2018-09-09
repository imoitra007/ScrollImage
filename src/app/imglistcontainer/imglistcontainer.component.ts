import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-imglistcontainer',
  templateUrl: './imglistcontainer.component.html',
  styleUrls: ['./imglistcontainer.component.css']
})
export class ImglistcontainerComponent implements OnInit {
  ngOnInit(): void {
   
   this.getImages();
  }
  public listOfImage : Object = null;
  totalImagetoDisplay: number;
  public position = 700;

 // Scroll Event Listner.
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {  
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && 
        this.listOfImage != null) {
     this.showMoreImages();
    }
  }



  // Showing More Images on demand.
  showMoreImages() {
    this.totalImagetoDisplay = this.totalImagetoDisplay + 6;
  }

  // Constructor
  constructor(public appService: AppService,public el: ElementRef) {
    this.totalImagetoDisplay = 6;
  }

 // Service call : Getting Images from API.
 // I have not created Model(Classes) for binding. Directly binding the JSON object from API.
  getImages() {
    this.appService.getImages()
      .subscribe(
        res => { this.listOfImage = res;  },
        err => { console.log(err), alert("Error in getting Request from server") }
      )

  }

}
