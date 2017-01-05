export class PublicTuition {
    constructor(public institution: string,
        public medium: string,
        public level: string,
        public subjects: string[],
        public thana: string,
        public zone: string,
    ) { }
    public days: string[];

}
