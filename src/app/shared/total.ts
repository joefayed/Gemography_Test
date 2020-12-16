import { from } from "rxjs";
import { Repo } from "./repo";
import { Owner } from "./Owner";
import {License } from "./License";


export class Total {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
}