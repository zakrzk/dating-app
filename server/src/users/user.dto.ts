import {ArrayMinSize, IsEmail, IsInt, IsNotEmpty, Length, Max, Min} from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @Length(2, 30)
    firstName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8, 64)
    passwordHash: string;

    @IsInt()
    @Min(18)
    @Max(120)
    age: number;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    @ArrayMinSize(1)
    orientation: string[];

    @Length(2, 30)
    profession: string;

    @IsNotEmpty()
    hobbies: string[];

    @IsInt()
    @Min(-5)
    @Max(5)
    politicalEconomics: number;

    @IsInt()
    @Min(-5)
    @Max(5)
    politicalDiplomatic: number;

    @IsInt()
    @Min(-5)
    @Max(5)
    politicalCivil: number;

    @IsInt()
    @Min(-5)
    @Max(5)
    politicalSocietal: number;

}