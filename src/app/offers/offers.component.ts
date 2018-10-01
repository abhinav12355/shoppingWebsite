import { Component, OnInit,ViewEncapsulation} from '@angular/core';

import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {ProgressBarModule} from 'primeng/progressbar';
import {NgForm} from '@angular/forms/src/directives/ng_form';
import {GrowlModule,Message} from 'primeng/primeng';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
//   styleUrls: ['./offers.component.css']
styles: [`
.red
{
    color:red;
}
.inside
{
    text-align:center;
    margin-left:10%;
}
.head
{
    width: 100%;
    height:100%;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    display: block;
    background-color:  #3399ff;
    color:white;
    border-radius:8px;
    padding:12px;
}
.border
{
    border-style: solid;
    border-width: 5px;
    border-color:#0081c2;
    padding:5%;
    margin:5%;
    margin-left:7%;
  
}
.label
{
    color:black;
}
.ui-steps .ui-steps-item {
    width: 25%;
}

.ui-steps.steps-custom {
    margin-bottom: 30px;
}
 
.ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
    height: 10px;
    padding: 0 1em;
}
 
.ui-steps.steps-custom .ui-steps-item .ui-steps-number {
    background-color: #0081c2;
    color: #FFFFFF;
    display: inline-block;
    width: 36px;
    border-radius: 50%;
    margin-top: -14px;
    margin-bottom: 10px;
}

.ui-steps.steps-custom .ui-steps-item .ui-steps-title {
    color: #555555;
}
`],
encapsulation: ViewEncapsulation.None
})
export class OffersComponent implements OnInit {

  constructor(private http:Http,
    private router:Router) { }
   
  public items: MenuItem[];
  value: number = 0;
  public ind0=true;
  public ind1=false;
  public ind2=false;
  public ind3=false;
  public ind4=false;
  public ind5=false;
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

  activeIndex: number = 1;
  
      public msgs;
      public category:Array<String>;

    

      public sellItemForm(sellForm:NgForm)
      {
        console.log("signup function called");
        let sellDetails=sellForm.value;
        console.log(sellForm.value);  
        this.http.post('http://localhost:8000/sell/additem',sellDetails).subscribe(response=>{
        let status=response;
        alert(`response is: ${response}`);
        console.log(response);
        this.activeIndex=2;
        this.ind2=true;
        this.ind0=false;
        this.ind1=false;
        this.ind3=false;
        this.ind5=false;
        

        },error=>
        {
          let status = error;
          alert(`the error is ${error}`);
          console.log(`error in signup function ${error}`);
        })
      }
     
      public selleraccountcreation(seller:NgForm)
      {
        console.log("signup function called");
        let sellDetails=seller.value;
        console.log(seller.value);  
        this.http.post('http://localhost:8000/sell/createaccount',sellDetails).subscribe(response=>{
        let status=response;
        alert(`response is: ${response}`);
        console.log(response);
        this.activeIndex=1;
        
        this.ind2=false;
        this.ind0=false;
        this.ind1=true;
        this.ind3=false;
        this.ind5=false;

        },error=>
        {
          let status = error;
          alert(`the error is ${error}`);
          console.log(`error in signup function ${error}`);
        })
      }

      public sellerlogin(loginForm:NgForm)
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
        this.http.post('http://localhost:8000/sell/authenticate',loginDetails).subscribe(response=>{
            let status=response.json();
            
               console.log("token: "+ status.token);
               if(status.token!=null)
               {
                //this.val2=true;
                 localStorage.setItem('id_token1',status.token);
                 localStorage.setItem('user1',JSON.stringify(user1));
                 this.authToken=status.token;
                 this.user=user1;
               
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
      
  
      public paymentDetails(payment:NgForm)
      {
        console.log("signup function called");
        let sellDetails=payment.value;
        console.log(payment.value);  
        this.http.post('http://localhost:8000/sell/paymentmode',sellDetails).subscribe(response=>{
        let status=response;
        alert(`response is: ${response}`);
        console.log(response);
        this.activeIndex=3;
        this.ind2=false;
        this.ind0=false;
        this.ind1=false;
        this.ind3=true;
        this.ind5=false
        },error=>
        {
          let status = error;
          alert(`the error is ${error}`);
          console.log(`error in signup function ${error}`);
        })
      }










      ngOnInit() {
        this.items = [{
          label: 'Login/Signup',
          command: (event: any) => {
              this.activeIndex = 0;
              this.msgs.length = 0;
              this.msgs.push({severity:'account', summary:'First Step', detail: event.item.label});
          }
      },
      {
          label: 'Details',
          command: (event: any) => {
              this.activeIndex = 1;
              this.msgs.length = 0;
              this.msgs.push({severity:'detail', summary:'Item Details', detail: event.item.label});
          }
      },
      {
          label: 'Payment',
          command: (event: any) => {
              this.activeIndex = 2;
              this.msgs.length = 0;
              this.msgs.push({severity:'payment', summary:'Select your Credit Account', detail: event.item.label});
          }
      },
      {
          label: 'Dashboard',
          command: (event: any) => {
              this.activeIndex = 3;
              this.msgs.length = 0;
              this.msgs.push({severity:'dashboard', summary:'Dashboard', detail: event.item.label});
          }
      }
  ];
}
public change()
{
    this.ind5=true;
    this.ind2=false;
    this.ind0=false;
    this.ind1=false;
    this.ind3=false;

}
public change1()
{
    this.ind5=false;
    this.ind2=false;
    this.ind0=true;
    this.ind1=false;
    this.ind3=false;

}
}


