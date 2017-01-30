import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';
import { AuthService } from '../../../auth.service';
import { PrivateTuition } from '../private-tuition';
import { Info } from '../info';
import { PrivateTuitionService } from '../private-tuition.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tuition-creator',
  templateUrl: './tuition-creator.component.html',
  styleUrls: ['./tuition-creator.component.css']
})
export class TuitionCreatorComponent implements OnInit {

  subjectList = ["Bangla", "English", "Math", "Physics", "Chemistry", "Biology"];
  daysList = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  selectedDays:string[] = [];
  selectedList:string[] = [];
  daysSelectFlag = false;
  info = new Info();

  mediums: string[] = this.info.getMediums();
  levels: string[];

  constructor(private authService: AuthService,
   private tuitionService: PrivateTuitionService,
   private router: Router) { }
  user: User = this.authService.getUser();
  subs: string[];
  tuition = new PrivateTuition("", "", "", [""]);
  ngOnInit() {
    // this.subs = [""];
  }

  IsLocationValid() {
    // console.log(this.user.isLocationValid());

    return this.user.isLocationValid();
  }

  mediumChange(value: string) {
    this.levels = this.info.getLevels(value);
  }

  isFormValid() {

    var validity = true;
    validity = this.tuition.isMediumValid().stat &&
    this.tuition.isLevelValid().stat &&
    this.tuition.isInstitutionValid().stat;

    // console.log(validity);
    // console.log(this.tuition);
    
    // console.log(this.tuition.isMediumValid());
    // console.log(this.tuition.isLevelValid());
    // console.log(this.tuition.isInstitutionValid());
    
    return validity;
  }

  onSubmit() {
    if(this.isFormValid()){
      console.log("Submit Form Valid");
    }
    this.tuition.subjects = this.selectedList;
    this.tuition.days = this.selectedDays;
    console.log(this.tuition);

    console.log("Submission");
    var res = this.tuitionService.createTuition(this.tuition)
    .then(res=>{
      if(res.success){
        this.router.navigate(['/dashboard/my-tuition']);
      }
    })
    console.log("Submitter Response");
    console.log(res);
    

  }

  search(term: string) {
    console.log("Search Event ");
    var ar = [];

    if (term.length > 0) {
      var regx = new RegExp(".*" + term + ".*", "i");
      this.subjectList.forEach(function (entry) {
        console.log(entry + regx);

        if (regx.test(entry)) {
          console.log("Matched");
          ar.push(entry);
          console.log("Subs " + ar);
        }

      });
      this.subs = ar;
    }
  }

  AddSubject(sub: string) {
    var index = this.subjectList.indexOf(sub);
    if (index > -1) {
      this.subjectList.splice(index, 1);
      this.selectedList.push(sub);
    }
  }

  removeSubject(sub: string) {
    var index = this.selectedList.indexOf(sub);
    if (index > -1) {
      this.selectedList.splice(index, 1);
      this.subjectList.push(sub);
    }
  }

  selectDay(s: string) {
    console.log(s);
    var ind = this.selectedDays.indexOf(s);
    if (ind < 0) {
      this.selectedDays.push(s);
    } else {
      this.selectedDays.splice(ind, 1);
    }
  }

  isSelected(d: string) {
    if (this.selectedDays.indexOf(d) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  daySelectToggle() {
    if (this.daysSelectFlag) {
      this.daysSelectFlag = false;
    } else {
      this.daysSelectFlag = true;
    }
    console.log(this.daysSelectFlag);

  }

}
