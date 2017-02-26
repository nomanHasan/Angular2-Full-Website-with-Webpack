export class Usser{

    constructor(
        public username: string,
        public name: string,
        public password: string,
        public accountType: string,
        public contactNo: string,
        public email: string) {}

    public id;
    public location: {
        district: string;
        city: string;
        thana: string;
        zone: string;
        address: string;
        street: string;
        house: string;
    }

    public teacherInfo: {
        institution: string;
        level: string,
        sex: string,
        age: Number
    }
    
    isLocationValid(){
        var err= [];
        var stat= true;
        if(this.location.district.length <=0){
            err.push("District must be present ");
            stat = false;
        }
        if(this.location.thana.length <=0){
            err.push("Thana must be present ");
            stat = false;
        }
        if(this.location.city.length <=0){
            err.push("City must be present ");
            stat = false;
        }
        if(this.location.zone.length <=0 && this.location.address.length <=0 ){
            err.push("Ward/ Village name must be present ");
            stat = false;
        }
        if(this.location.house.length <=0){
            err.push("House info must be present ");
            stat = false;
        }
        if(this.location.street.length <=0){
            err.push("Street info must be present ");
            stat = false;
        }
        return {stat, err};
    }

    isTeacherInfoValid(){
        var err= [];
        var stat= true;
        if(this.teacherInfo.institution.length <=0){
            err.push("Institution must be present ");
            stat = false;
        }
        if(this.teacherInfo.level.length <=0){
            err.push("Level must be present ");
            stat = false;
        }
        if(this.teacherInfo.sex.length <=0){
            err.push("Sex must be present ");
            stat = false;
        }
        if(this.teacherInfo.age <10){
            err.push("Age cannot be less than 10");
            stat = false;
        }
        if(this.teacherInfo.age >60){
            err.push("Age cannot be more than 60");
            stat = false;
        }
        return {stat, err};
    }


    isNameValid(){
        var err=[];
        var stat= true;
        if(this.name.length <3){
            err.push("Name Length cannot be less than 3 ");
            stat = false;
        }
        if(this.name.length > 25){
            err.push("Name Length cannot be more than 15");
            stat = false;
        }
        var myRe = /\d/;
        var myArray = myRe.exec(this.name);

        if(myArray){
            err.push("Name Cannot contain numbers");
            stat = false;
        }

        myRe = /^[ A-Za-z\.]*$/;
        myArray = myRe.exec(this.name);

        if(!myArray){
            err.push("Name can only contain Letters and Dot(.).");
            stat = false;
        }

        return {stat, err};
    }

    isUsernameValid(){
        var err=[];
        var stat= true;
        if(this.username.length <3){
            err.push("Name Length cannot be less than 3");
            stat = false;
        }
        if(this.username.length > 25){
            err.push("Name Length cannot be more than 15 ");
            stat = false;
        }
        var myRe = /^[\d\w\_-]*$/;
        var myArray = myRe.exec(this.username);

        if(!myArray){
            err.push("Username can only contain Letters, numbers, underscore(_) and hyphen(-).");
            stat = false;
        }
        myRe = /^[A-Za-z].*$/;
        myArray = myRe.exec(this.username);

        if(!myArray){
            err.push("Username can only start with Alphabets. ");
            stat = false;
        }
        return {stat, err};
    }

    isPasswordValid(){
        var err=[];
        var stat= true;
        if(this.password.length <5){
            err.push("Password Length cannot be less than 5");
            stat = false;
        }
        if(this.password.length > 50){
            err.push("Password Length cannot be more than 50");
            stat = false;
        }
        var myRe = /^[\d\w_.-]*$/;
        var myArray = myRe.exec(this.password);

        if(!myArray){
            err.push("Password can only contain Letters, numbers, underscore(_) and hyphen(-).");
            stat = false;
        }
        return {stat, err};
    }

    isAccountTypeValid(){
        var err=[];
        var stat= true;

        if( ["Teacher", "Guardian/Student"].indexOf(this.accountType) < 0 ){
            stat = false;
            err.push("Account Type must be one of Teacher and Guardian/Student");
        }
        return {stat, err};
    }

    isContactNoValid(){
        var err=[];
        var stat= true;
        if(this.contactNo.length <11){
            err.push("Mobile No Length cannot be less than 11");
            stat = false;
        }
        if(this.contactNo.length > 11){
            err.push("Mobile No Length cannot be more than 11 ");
            stat = false;
        }
        var myRe = /^01[356789].*$/;
        var myArray = myRe.exec(this.contactNo);

        if(!myArray){
            err.push("Mobile No can be only of Grameenphone, Banglalink, Teletalk, Robi or Airtel.");
            stat = false;
        }
        return {stat, err};
    }

    isEmailValid(){
        var err=[];
        var stat= true;
        if(this.email.length <11){
            err.push("Mobile No Length cannot be less than 11");
            stat = false;
        }
        if(this.contactNo.length > 11){
            err.push("Mobile No Length cannot be more than 11 ");
            stat = false;
        }
        var myRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var myArray = myRe.exec(this.email);

        if(!myArray){
            err.push("The Email Adress is not in valid format.");
            stat = false;
        }
        return {stat, err};
    }

    

}