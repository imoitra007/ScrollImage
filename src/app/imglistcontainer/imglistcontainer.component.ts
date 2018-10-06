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

  public listOfImage = [];

  // Scroll Event Listner.
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 1)) {
      this.getImages();
    }
  }

  // Constructor
  constructor(public appService: AppService) { }

  // Service call : Getting Images from API.
  // I have not created Model(Classes) for binding. Directly binding the JSON object from API.
  getImages() {
    this.appService.getImages()
      .subscribe(
        res => { this.listOfImage.push(res) },
        err => { console.log(err), alert("Error in getting Request from server") }
      )

  }

}
