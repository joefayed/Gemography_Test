import { Component, OnInit } from '@angular/core';
import { Repo } from '../shared/repo';
import { REPOS } from '../shared/repos';


@Component({
  selector: 'app-trending-repos',
  templateUrl: './trending-repos.component.html',
  styleUrls: ['./trending-repos.component.scss']
})
export class TrendingReposComponent implements OnInit {

   repos: Repo[] = REPOS;
  constructor() {}

  ngOnInit(): void {
  }

}
