import {IsEmail, IsInt, isInt, IsNotEmpty, Length, Max, Min} from "class-validator";

export class UserDto {
    @Length(2, 30)
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    passwordHash: string;

    @IsInt()
    @Min(18)
    @Max(120)
    age: number;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    orientation: string[];

    @Length(2,30)
    profession: string;

    @IsNotEmpty()
    hobbies: string[];
    
    @IsInt()
    politicalEconomics: number;

    @IsInt()
    politicalDiplomatic: number;

    @IsInt()
    politicalCivil: number;

    @IsInt()
    politicalSocietal: number;

}