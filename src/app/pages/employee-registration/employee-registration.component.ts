import { Component } from '@angular/core';
import { EmployeeRegistrationService} from './employee-registration.service '

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent  {

  selectedFile=null;

  onFileSelected(event){
    console.log(event)
    this.selectedFile=event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile)
    this._employeeregistrationService.enroll(fd).subscribe(
      data =>{
        console.log("sucess")
      }
    )
  
  }
//constructor(private _userdetailsService: UserdetailsService
// this._updateService.fetch().subscribe(
//   data => {
//     this.user = data;
//   });
// }

  constructor(private _employeeregistrationService:EmployeeRegistrationService) { };


}
