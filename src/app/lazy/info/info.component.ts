import {Component, OnInit} from '@angular/core';
import {ListService} from '../list.service';
import {Users} from '../users';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  usersList: Users[] = [];

  constructor(public httpService: ListService) { }

  ngOnInit() {
    // request to server
    this.httpService.getData().subscribe((data: { data: Users[] }) => {
      this.usersList = data.data;
      console.log(this.usersList);
    });
  }
}
