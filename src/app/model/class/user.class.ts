export class UserClass {
    id: number;
    name: string;
    email: string;
    age: number;
    gender: string;
    profession: string;
    address: string;
    phone: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    website: string;
    skills: string[];
    hobbies: string[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.age = 0;
        this.gender = "";
        this.profession = "";
        this.address = "";
        this.phone = "";
        this.city = "";
        this.state = "";
        this.zip = "";
        this.country = "";
        this.website = "";
        this.skills = [];
        this.hobbies = [];
    }
}