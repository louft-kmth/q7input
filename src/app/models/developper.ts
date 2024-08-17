import { skills } from "./skills";

export class Developer {
  lastName: string;
  firstName: string;
  age: number;
  gender: string;
  bio: string;
  skills: skills[];

  constructor(lastName: string, firstName: string, age: number, gender: string, bio: string, skills: skills[]) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
    this.bio = bio;
    this.skills = skills;
  }
}
