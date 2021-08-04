import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InputData } from 'src/Temp/InputData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:InputData = new InputData();
  validData:boolean=false;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(f:any,email:any,password:any){
    const data = { 
      emailid:email.value,
      password:password.value
    }
    console.log(f.value) 
    this.http.post("http://localhost:3000/api/user/login",f.value).subscribe((res:any)=>{
      console.log(res);
      //storing token in local storage
      localStorage.setItem('token',res.token)
      this.router.navigate(['/upload']);
    },
    err => console.log(err)
    
    );
  } 
  
}
