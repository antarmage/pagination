import { Component, OnInit} from '@angular/core';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { StaticDataService } from '../shared/services/static-data.service';
import { ApiServicesService } from '../shared/services/api-services.service';
import { PostModel } from '../shared/models/post.model';
import { Observable } from 'rxjs';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initialPostList$:Observable <PostModel[]>;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private staticData:StaticDataService,
    private apiCalls:ApiServicesService,
    ) { }

  ngOnInit() {
    this.apiCalls.getPostList().subscribe(response=>{
      this.staticData.postInitalDataLoad(response);
      this.initialPostList$ = this.staticData.postList$;
    });
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  handlePagination(paginationCounter){
      //hit the service
      const requestPayload = {
        _start:paginationCounter*10,_limit:10
      };
      this.apiCalls.getPostList(requestPayload).subscribe(response=>{
        this.staticData.postInitalDataLoad(response);
        this.initialPostList$ = this.staticData.postList$;
      });
  }
  createNewPost() {
    if (this.addForm.valid) {
        var addpost = {
            title: this.addForm.controls['title'].value,
            body: this.addForm.controls['description'].value         
            };
        this.addForm.reset();
        this.staticData.updatePostData(addpost);
    }
}

}
