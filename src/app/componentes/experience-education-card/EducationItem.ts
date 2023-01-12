export class Education{
    educationImg: string ="";
    educationTitle: string ="";
    educationItemDescription: string ="";

    constructor(educationImg:string,
        educationTitle:string,
        educationItemDescription:string){
            this.educationImg=educationImg;
            this.educationTitle=educationTitle;
            this.educationItemDescription=educationItemDescription;
        }
}