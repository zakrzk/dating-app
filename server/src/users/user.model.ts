export class User {

  firstName: string;
  email: string;
  passwordHash: string;
  age: number;
  gender: string;
  orientation: string[];
  profession: string;
  hobbies: string[];
  politicalEconomics: number;
  politicalDiplomatic: number;
  politicalCivil: number;
  politicalSocietal: number;

  constructor(userObj) {
    this.firstName = userObj.firstName;
    this.email = userObj.email;
    this.passwordHash = userObj.passwordHash;
    this.age = userObj.age;
    this.gender = userObj.gender;
    this.orientation = userObj.orientation;
    this.profession = userObj.profession;
    this.hobbies = userObj.hobbies;
    this.politicalEconomics = userObj.politicalEconomics;
    this.politicalDiplomatic = userObj.politicalDiplomatic;
    this.politicalCivil = userObj.politicalCivil;
    this.politicalSocietal = userObj.politicalSocietal;

  }

}