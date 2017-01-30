export class Tuition {
    constructor(public institution: string,
        public _id: string,
        public medium: string,
        public level: string,
        public subjects: string[],
        public thana: string,
        public zone: string,
        public sal: Number
    ) { }
    public days: string[];
}
