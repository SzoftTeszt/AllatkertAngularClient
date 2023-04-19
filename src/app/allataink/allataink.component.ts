import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allataink',
  templateUrl: './allataink.component.html',
  styleUrls: ['./allataink.component.css']
})
export class AllatainkComponent {

  allatok:any;
  oszlopok=["id","nev","faj","gondozo","helye","erkezes"];
  showError:boolean=false;
  errorMessage:string="";
  constructor(private base:BaseService, private router:Router){
    
  }
  ngOnInit(){
    this.base.getAll('allatok').subscribe({
      next:res=>{
        this.allatok=res;
        this.showError=false;
        console.log(this.allatok);
      },
      error:err=>{
        this.showError=true;
        this.errorMessage=err.message;
      }
    }
    );
  }
  refresh(){
    //window.location.reload();
    this.router.navigate(['/allataink']);
  }
}
