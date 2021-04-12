import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({

  id: 'number',
  name: 'string',
  email: 'string',
  passwordHash: 'string',
  age: 'number',
  gender: 'string',
  orientation: 'array',
  profession: 'string',
  hobbies: 'array',
  politicalEconomics: 'number',
  politicalDiplomatic: 'number',
  politicalCivil: 'number',
  politicalSocietal: 'number',
  
});

