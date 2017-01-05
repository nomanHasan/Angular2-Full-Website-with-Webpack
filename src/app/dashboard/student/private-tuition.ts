import {Info } from './info';

var info = new Info();

export class PrivateTuition {
    constructor(public institution: string,
        public medium: string,
        public level: string,
        public subjects: string[],
    ) { }
    public days: string[];


    isMobileNo(source: string) {
        var re = /01[356789]\d{8}/;
        var arr = re.exec(source);
        if (arr) {
            return true;
        } else {
            return false;
        }
    }

    isInstitutionValid() {
        var err = [];
        var stat = true;
        if (this.institution.length < 4) {
            err.push("Institution name lenght must be more than 4 ");
            stat = false;
        }
        if (this.institution.length > 50) {
            err.push("Institution name lenght must be less than 50  ");
            stat = false;
        }

        if (this.isMobileNo(this.institution)) {
            err.push("Institution cannot contain Mobile no");
            stat = false;
        }
        return { stat, err };
    }

    isMediumValid() {
        var err = [];
        var stat = true;
        if (this.medium.length < 4) {
            err.push("Medium name lenght must be more than 4  ");
            stat = false;
        }
        if (this.medium.length > 20) {
            err.push("Medium name lenght must be more than 20  ");
            stat = false;
        }

        var mList = info.getMediums();

        if (mList.indexOf(this.medium) == -1) {
            err.push("Medium doesn't exists.");
            stat = false;
        }

        return { stat, err };
    }

    isLevelValid() {
        var err = [];
        var stat = true;
        if (this.level.length < 4) {
            err.push("Level name lenght must be more than 4 present ");
            stat = false;
        }
        if (this.level.length > 20) {
            err.push("Level name lenght must be more than 20 present ");
            stat = false;
        }

        var Llist = info.getLevels(this.medium);

        if (Llist.indexOf(this.level) == -1) {
            err.push("Level does not exists ");
            stat= false;
        }

        return { stat, err };
    }



}
