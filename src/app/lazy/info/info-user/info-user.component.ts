import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../users';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  @Input() userInfo: Users;
  constructor() { }

  ngOnInit() {
  }

}
