import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-heroes',
  templateUrl: './hero.html',
  styleUrls: [ './hero.css' ]
})
export class HeroesComponent implements OnInit {
  isClickedOnce : boolean = false;
ngOnInit(): void {
    
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
