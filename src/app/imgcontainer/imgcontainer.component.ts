import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-imgcontainer',
  templateUrl: './imgcontainer.component.html',
  styleUrls: ['./imgcontainer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgcontainerComponent implements OnInit {


  @Input() public imageSource: string;
  @Input() public uploadedBy: string;
  @Input() public uploadedOn: Date;
  @Input() public tags: string;

  constructor() { }

  ngOnInit() {
  }

}
