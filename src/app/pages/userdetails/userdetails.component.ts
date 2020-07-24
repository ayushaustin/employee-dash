import { Component }  from '@angular/core';
import { User } from './user';
import {  UserdetailsService } from './userdetails.service '


@Component ({
  selector: 'app-userdeatails',
  templateUrl: './userdetails.component.html',
   styleUrls: ['./userdetails.component.scss']
})

export class UserdetailsComponent {
 userModel = new User("", "",7004519800, "", 250, true);


 constructor(private _userdetailsService: UserdetailsService
 ){};

 onSubmit(){
  this._userdetailsService.enroll(this.userModel)
  .subscribe(
    data => console.log('Success!', data),
    error =>console.error('Error!', error)
  )
}
}

