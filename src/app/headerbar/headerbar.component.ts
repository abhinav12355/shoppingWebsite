import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {NgForm} from '@angular/forms/src/directives/ng_form';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {FlashMessageModule} from 'angular-flash-message';
import { MainpageComponent } from '../mainpage/mainpage.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SpinnerModule} from 'primeng/spinner';
@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css'],
  
})
export class HeaderbarComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private http:Http,
    private flashMessage:FlashMessageModule,
    private router:Router,
 
  
  ) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
 
  
  public arr;
  public val="1";
  val2: Boolean;
  appear:Boolean;
  fname:String;
  lname:String;
  username:String;
  email:String;
  password:String;
  empty:Boolean;
  eval:Boolean;
  prob:Boolean;
  succ:Boolean;
  empty1:Boolean;
  eval1:Boolean;
  prob1:Boolean;
  succ1:Boolean;
  authToken:String;
  user;
  public validatefield1(user)
  {
    if(user.email==undefined||user.password==undefined)
    return false;
    else
    {
      this.empty1=false;
    return true;
    }
   
  }
  public validateEmail1(email)
  {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   
  }
  timeout() {
    setTimeout(() => {
        console.log('Test');
        document.getElementById('cl').click();
        
    }, 3000);
}
  public LoginForm(loginForm:NgForm)
  {
    const user1={
      email:this.email,
      password:this.password,
    }
    if(this.validatefield1(user1))
    {
      this.empty1=false;
      if(this.validateEmail1(this.email))
      {
        this.eval1=false;
    console.log("login function called");
    let loginDetails=loginForm.value;
    console.log(loginForm.value);
    
    this.http.post('http://localhost:8000/signupform/authenticate',loginDetails).subscribe((response:Response)=>{
    let status=response.json();

   console.log("token: "+ status.token);
   if(status.token!=null)
   {
    //this.val2=true;
     localStorage.setItem('id_token',status.token);
     localStorage.setItem('user',JSON.stringify(user1));
     this.authToken=status.token;
     this.user=user1;
    this.arr=loginForm.value.email;
    sessionStorage.setItem('email',this.arr);
    sessionStorage.setItem('val1',this.val);

   // alert(`response from login page is: ${status} `);
    console.log(response);
   
    this.prob1=false;
    this.succ1=true;
    document.getElementById('cl').click();
 
    
   // this.arr=response;
   }
   else
   {
    this.succ1=false;
    this.prob1=true;
   }
    },error=>
    {
      this.prob1=true;
      let status = error;
      alert(`the error is ${error}`);
      console.log(`error in login function ${error}`);
    }); 
  }
  else{
    this.eval1=true;
  }
}
else{
  this.empty1=true;
}
  }
  public validatefield(user)
  {
    if(user.fname==undefined||user.lname==undefined||user.email==undefined||user.password==undefined)
    return false;
    else
    {
      this.empty=false;
    return true;
    }
   
  }
  public validateEmail(email)
  {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   
  }
  public signUpForm(signForm:NgForm)
  {
    const user={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      password:this.password,
    }
    if(this.validatefield(user))
    {
      this.empty=false;
      if(this.validateEmail(this.email))
      {
        this.eval=false;
        console.log("signup function called");
        let signUpDetails=signForm.value;
        console.log(signForm.value);  
        this.http.post('http://localhost:8000/signupform/adduser',signUpDetails).subscribe(response=>{
        let status=response;
        this.succ=true;
       // alert(`response is: ${response}`);
        console.log(response);
        },error=>
        {
          let status = error;
          this.succ=false;
          this.prob=true;
          console.log(`error in signup function ${error}`);
        })
      }
      else{
        this.eval=true;
      }
   }
   else{
     this.empty=true;
   }
  }
 public loadTOken()
 {
   const token=localStorage.getItem('id_token');
   this.authToken=token;
 }
 public loggedIn()
 {
  this.loadTOken();
  if(this.authToken!=null)
  return true;
  else
  return false;
 }
  public logout()
  {
    this.authToken=null;
    this.user=null;
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }


}
