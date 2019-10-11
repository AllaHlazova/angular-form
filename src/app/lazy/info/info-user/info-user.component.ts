import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../list-user/users';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  @Input() userInfo: Users;

  constructor() {}

  ngOnInit() {}
}
