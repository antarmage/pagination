import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable()
export class StaticDataService {
  private postListSub: BehaviorSubject<PostModel[]>;
  public postList$: Observable<PostModel[]>;

  constructor() { 
    this.postListSub = new BehaviorSubject([]);
    this.postList$ = this.postListSub.asObservable();
  }
  postInitalDataLoad(response){
   this.postListSub.next(response.json());
  }
  updatePostData(data){
    let currentPostDataList = this.postListSub.getValue();
    console.log(currentPostDataList[currentPostDataList.length-1].id);
    data.id = Number(currentPostDataList[currentPostDataList.length-1].id ) + 1;
    currentPostDataList.push(data);
    this.postListSub.next(currentPostDataList);
  }

}
