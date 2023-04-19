import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ujallat',
  templateUrl: './ujallat.component.html',
  styleUrls: ['./ujallat.component.css']
})
export class UjallatComponent {
ujAllat!:FormGroup;

datum= new Date().toJSON().slice(0,10);

gondozok:any;

showError:boolean=false;
errorMessage:string="";

showErrorDolgozo:boolean=false;
errorMessageDolgozo:string="";

constructor(private base:BaseService, 
            private router:Router,
            private fb:FormBuilder
            )
            {
    this.ujAllat=this.fb.group({
      nev:['',[Validators.required]],
      faj:['',[Validators.required]],
      erkezes:[this.datum,[Validators.required]],
      helye:['',[Validators.required]],
      gondozo:['',[Validators.required]],
    }); 
    this.base.getAll('gondozo').subscribe(
      {
        next:res=>{this.gondozok=res; this.showErrorDolgozo=false;},
        error:err=>{this.errorMessage=err.message; this.showErrorDolgozo=true}
      }
    )
 }

 addAnimal(body:any){
  this.base.newAnimal(body).subscribe(
    {
      next:()=>{        
        this.showError=false;
        this.router.navigate(['/allataink'])
      },
      error:err=>{
        this.showError=true;
        this.errorMessage=err.message;
      }
    }
  )
 }

}
