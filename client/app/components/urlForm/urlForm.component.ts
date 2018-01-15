import { Component, OnInit } from '@angular/core';
import { NgForm,Form,FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Http,HttpModule} from '@angular/http';
import {Observable} from 'rxjs'

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: './urlForm.component.html',
  
})
export class UrlFormComponent implements OnInit {

  input : string = '';
  isUrlValid:boolean = undefined;
  countRequest:number = 0;
  domainName:string = '';
  hostName:string =''
  myUrlList : Array<any> = []
  
  constructor(private fb :FormBuilder, public http:Http) { 
 
  }

  
  ngOnInit() {
      this.getlist()
  }

  getlist(){
       this.http.get('/api/myUrls')
    .subscribe(results=>{
        console.log("results ",results);
        this.myUrlList = results.json()
    },(err)=>console.error(err))
  }

  check():boolean
  {
    let reg = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
    //console.log("is url valid",reg.test(this.input))
   return (reg.test(this.input) )?  true :  false;
  
    
  }

  save(){
    console.log(" url is ",this.input)
    let body = {"url":this.input}
    console.log("body sending",body)
    this.http.post('/api/myUrl',body)
    .subscribe(results=>{
        console.log("results ",results);
        this.input = ''
        this.getlist()
    })
    

  }

}