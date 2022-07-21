import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form: FormGroup;
  constructor(private formBuilder: FormGroup) {
    this.form=this.formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(8)]],
      DeviceInfo:this.formBuilder.group({
        deviceId: 0
      })
    })
   }

  ngOnInit(): void {
  }

}
