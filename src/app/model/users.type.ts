export type UserType = {
 _id: number;
 name: string;
 email: string;
 age: number;
 gender: string;
 profession: string;
 country: string;
 city: string;
 state: string;
 phone: string;
 skills: string[];
 hobbies: string[];
}

export type UserResponse = {
    data: UserType[];
    message: string;
    statusCode: number;
    success: boolean;
}