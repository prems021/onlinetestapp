
import { Component,OnInit,DoCheck,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Http } from '@angular/http';
import { vmock }    from './v.mock';




 
 

@Component({
  
  selector: 'vazhipad',
  templateUrl: 'vazhipad.html',
  styleUrls: [ 'vazhipad.css' ]
})





export class VazhipadComponent 
{
     
 myForm: FormGroup;
   stars = ['Aswathy', 'Bharani','Karthika', 'Makayiarm'];
   data: vmock;
   name: string;
   todos: any;
   todoObj: any;  

constructor( private fb: FormBuilder ) {  
   
  this.todos = [];
    }
  
  
  submitted = false;
    onSubmit() { 
         this.submitted = true;
        
     }

   ngOnInit()  {
     
     
   this.myForm = this.fb.group({
       
      
            devotee_star: ['Aswathy'],
            devotee_name: ['premji', [<any>Validators.required, <any>Validators.minLength(3)]]
            

             
        });
   }
  
   addTodo(event) {
     this.data = this.myForm.value;
      this.todoObj = {
        name: this.data.devotee_name,
        star: this.data.devotee_star,
        completed: false
      }
      this.todos.push(this.todoObj);
      
      event.preventDefault();
    }

   deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }
  
save() {
        
        console.log('hi');
    }
 open() {
  
}

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          @media screen
               {
                  p.bodyText {font-family:verdana, arial, sans-serif;}
               }
                 @media print
                 {
                    p.bodyText {font-family:georgia, times, serif;}
                 }
                 @media screen, print
                 {
                    p.bodyText {font-size:10pt}
                 }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}


     

}
