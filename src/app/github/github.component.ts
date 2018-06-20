import { Component, OnInit } from '@angular/core';
import { GitFollowersService } from '../services/git-followers.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {
followers: any[];

  constructor(private service: GitFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        followers => this.followers = followers
      );
  }

}
