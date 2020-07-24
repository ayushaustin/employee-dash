import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from './user';
import { UpdateService } from './update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})



export class UpdateComponent implements OnInit {
  @ViewChild('modal', { static: false })
  modal: any;
  tittle = 'user registration Details';
  dataId: {}
  userModel = new User("", "",7004519800,"",250, true);
  activeindex=-1;

  constructor(private _updateService: UpdateService,
              private _router:Router ){};


  userform() :void {
  this._router.navigate(['/userdetails']);
            }
            graph() :void {
              this._router.navigate(['/graph']);
                        }

  user:[];



  delete(_id) {

    this._updateService.deleteData(_id).subscribe(data =>
      {
        this.ngOnInit();
      });

  };
  ngOnInit()
    {
      this._updateService.fetch().subscribe(
        data => {
          this.user = data;
        });
    }
    edit(_Id){
      this.dataId=_Id
      this.modal.show();
       this._updateService.fetchId(_Id).subscribe(
         data => {
           console.log(data[0].username)
           this.userModel= new User(data[0].username,data[0].email,data[0].number,data[0].address,data[0].marks,data[0].admin);
         });
        }

       onSubmit(){

         console.log()
        this._updateService.enroll(this.dataId,this.userModel).subscribe(

          data => {console.log('Success!', data);this.ngOnInit();},
          error =>console.error('Error!', error)
        )

      }
      }




