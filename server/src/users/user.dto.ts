import {IsNotEmpty} from "class-validator";

export class UserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    passwordHash: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    orientation: string[];

    @IsNotEmpty()
    profession: string;

    @IsNotEmpty()
    hobbies: string[];
    
    @IsNotEmpty()
    politicalEconomics: number;
    
    @IsNotEmpty()
    politicalDiplomatic: number;
    
    @IsNotEmpty()
    politicalCivil: number;
    
    @IsNotEmpty()
    politicalSocietal: number;

}