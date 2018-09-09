import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../app.service';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-imglistcontainer',
  templateUrl: './imglistcontainer.component.html',
  styleUrls: ['./imglistcontainer.component.css']
})
export class ImglistcontainerComponent implements OnInit {
  public listOfImage : Object = null;
  totalImagetoDisplay: number = 6;

  // Scroll Event Listner.
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
     this.showMoreImages();
    }
  }

  // Showing More Images on demand.
  showMoreImages() {
    this.totalImagetoDisplay = this.totalImagetoDisplay + 6;
  }

  // Constructor
  constructor(public appService: AppService) {
    this.getImages();
  }

  ngOnInit() { }

 // Service call : Getting Images from API.
 // I have not created Model(Classes) for binding. Directly binding the JSON object from API.
  getImages() {
    this.appService.getImages()
      .subscribe(
        res => { this.listOfImage = res, console.log(this.listOfImage); },
        err => { console.log(err), alert("Error in getting Request from server") }
      )

  }

}
