import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { StaticDataService } from '../shared/services/static-data.service';
import { PostModel } from '../shared/models/post.model';
import {Router} from '@angular/router'
@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private staticData:StaticDataService,
    private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  createNewPost() {
    if (this.addForm.valid) {
        var addpost = {
            title: this.addForm.controls['title'].value,
            description: this.addForm.controls['description'].value,
            
        };
      console.log(addpost);
        this.router.navigate(['./home']);
        this.staticData.updatePostData(addpost);
    }
}  

}
