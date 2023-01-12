import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router) {
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
        deviceId: 0
      })
    })
   }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get("email");
  } 
 
  get Password()
  {
    return this.form.get("password");
  }

  onSubmit(event: Event){
     event.preventDefault; /*Cancela el curso normal del evento enviar*/
     this.authService.login(this.form.value).subscribe(data=>{
      console.log("Data: "+ JSON.stringify(data));
      this.router.navigate(['/portfolio']);
     })
  }
}
