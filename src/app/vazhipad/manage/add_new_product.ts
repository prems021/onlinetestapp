import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  
  selector: 'add_new_product',
  templateUrl: 'add_new_product.html',
  styleUrls: [ 'add_new_product.css' ]
})

export class AddnewproductComponent implements OnInit 
{
  
  constructor( private router: Router,private fb: FormBuilder ) { }
  myForm: FormGroup;
   has_stock_radio: string;
   has_stocks = [
    'Yes',
    'No',
      ];
     
    ngOnInit() {
      
        this.myForm = this.fb.group({
           
           
            product_name: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            code: [''],
            desec: [''],
            price:[''],
            has_stock_radio:['Yes']
            
    
            

             
        });

    }
  submit_values()
  {
  }

}
