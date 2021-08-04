import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient){}

  ngOnInit(): void {

  }
  onSubmit(f:any,email:any,password:any){
    const data = { 
      emailid:email.value,
      password:password.value
    }
    console.log(f.value) 
    this.http.post("http://localhost:3000/api/user",f.value).subscribe(res=>{
      console.log(res);

      this.router.navigate(['/']);
    });
  }

}
