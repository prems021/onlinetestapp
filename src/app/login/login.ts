import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  constructor( private router: Router) {   }
  ngOnInit()  {}
 login() {
   console.log('insisi');
   this.router.navigate(['/heroes']);
 }
  }
