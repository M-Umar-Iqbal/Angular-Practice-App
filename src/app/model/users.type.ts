export type UserType = {
 id: number;
 name: string;
 email: string;
 age: number;
 gender: string;
 profession: string;
 country: string;
 city: string;
 state: string;
 phone: string;
}

export type UserResponse = {
    data: UserType[];
    message: string;
    statusCode: number;
    success: boolean;
}