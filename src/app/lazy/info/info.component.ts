import {Component, OnInit} from '@angular/core';
import {ListService} from '../list-user/list.service';
import {Users} from '../list-user/users';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public usersList: Users[] = [];

  constructor(public httpService: ListService) { }

  ngOnInit() {
    // request to server
    this.httpService.getData().subscribe((data: { data: Users[] }) => {
      this.usersList = data.data;
      console.log(this.usersList);
    });
  }
}
