import { Component, OnInit, Inject } from '@angular/core';
import { Repo } from '../shared/repo';
import { ReporequestService } from "../services/reporequest.service";
import { Total } from "../shared/total";
@Component({
  selector: 'app-trending-repos',
  templateUrl: './trending-repos.component.html',
  styleUrls: ['./trending-repos.component.scss']
})
export class TrendingReposComponent implements OnInit {

  constructor(private repoService: ReporequestService,
    @Inject('BaseURL') public BaseURL) {}
  
  repos: Total[];
  errMess: string;
  ngOnInit(): void {
    this.repoService.getRepos().subscribe((repos) => (this.repos = repos), errmess => this.errMess = <any>errmess);
    console.log(this.repos);
  }

}
