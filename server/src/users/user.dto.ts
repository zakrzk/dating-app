import {IsEmail, IsInt, isInt, IsNotEmpty, Length, Max, Min} from "class-validator";

export class UserDto {
    @Length(2, 30)
    static firstName: string;

    @IsEmail()
    static email: string;

    @IsNotEmpty()
    @Length(8, 64)
    static passwordHash: string;

    @IsInt()
    @Min(18)
    @Max(120)
    static age: number;

    @IsNotEmpty()
    static gender: string;

    @IsNotEmpty()
    static orientation: string[];

    @Length(2,30)
    static profession: string;

    @IsNotEmpty()
    static hobbies: string[];
    
    @IsInt()
    static politicalEconomics: number;

    @IsInt()
    static politicalDiplomatic: number;

    @IsInt()
    static politicalCivil: number;

    @IsInt()
    static politicalSocietal: number;

}