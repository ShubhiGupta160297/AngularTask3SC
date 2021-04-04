import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns = [];
  dataSource;

  constructor(private service: CommonService) { }


  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.service.getUsers().subscribe((response: any) => {

      this.displayedColumns = Object.keys(response[0]);
      this.dataSource = new MatTableDataSource(response);

    });
  }

}
