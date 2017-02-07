import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  accountTypes = ["Teacher", "Guardian/Student"];

  user = new User("","");
  IsRegistration = true;

  usernameStatus: any;
  contactNoStatus:any;

  prev: string = "";
  prevC = "";

  constructor(private userService: UserService) {

  }

  search(term: string){

  }

  searchByUsername(usrname: string): void {
    if (usrname == this.prev){
      return
    }
    this.prev = usrname;
    this.userService.searchByUsername(usrname).then(response =>{      
      this.usernameStatus = response;
      console.log(response);
    })
    .catch(this.handleError);
  }

  searchByContactNo(contactNo: string): void {
    if (contactNo == this.prevC){
      return
    }
    this.prev = contactNo;
    this.userService.searchByContactNo(contactNo).then(response =>{      
      this.contactNoStatus = response;
      console.log(response);
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
    console.log(this.IsRegistration);
    this.user.name = "";
    this.user.contactNo = "";
    this.user.email = "";
    this.user.username = "";
  }
  onSubmit() {
    console.log("onSubmit Called ");
    console.log(this.user);
    if(this.isFormValid()){
      this.userService.createUser(this.user);
    }

    this.IsRegistration = false;
    // Starting Validation process

  }

  checkName(){
    console.log("CHeck NAme");
    
  }

  nameValidation(){
    if(this.user.name==""){
      return {stat:false };
    }
    console.log(this.user.isNameValid());
    
    return this.user.isNameValid();
  }
  usernameValidation(){
    if(this.user.username==""){
      return { stat: false};
    }
    var ret = this.user.isUsernameValid();
    if(ret.stat==true){
      if(this.usernameStatus){
        if(this.usernameStatus.exists){
          ret.stat = false;
          ret.err.push(this.usernameStatus.username + " Already Exists !");
          return ret;
        }else{
          return ret;
        }
      }else{
        return {stat: false};
      }
    }else{
      return ret;
    }
  }
  passwordValidation(){
    if(this.user.password==""){
      return {stat: false };
    }
    return this.user.isPasswordValid();
  }
  accountTypeValidation(){
    if(this.user.accountType==""){
      return { stat: false };
    }
    return this.user.isAccountTypeValid();
  }
  contactNoValidation(){
    if(this.user.contactNo==""){
      return { stat: false };
    }
    var ret = this.user.isContactNoValid();
    if(ret.stat ==true){
      if(this.contactNoStatus){
        if(this.contactNoStatus.exists){
          ret.stat= false;
          ret.err.push(this.contactNoStatus.contactNo+" Already exists in our Database ! ");
        }else{
          return ret;
        }
      }else{
        return {stat:false};
      }
    }else{
      return ret;
    }
  }
  emailValidation(){
    if(this.user.email==""){
      return { stat: false };
    }
    return this.user.isEmailValid();
  }

  isFormValid(){
    console.log("Is Form Valid ");
    var validity = this.user.isNameValid().stat &&
    this.user.isUsernameValid().stat&&
    this.user.isPasswordValid().stat&&
    this.user.isAccountTypeValid().stat&&
    this.user.isContactNoValid().stat&&
    this.user.isEmailValid().stat;
    console.log("Validity "+ validity);
    
    return validity;
  }

}
