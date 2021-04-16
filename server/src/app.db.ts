// @ts-nocheck
import * as mongoose from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { UserSchema } from './users/user.schema';
import { CommentSchema } from './comments/comment.schema';

const User = mongoose.model('User', UserSchema);
const Comment = mongoose.model('Comment', CommentSchema);
let currentComments = [];

const tempUser = "dbUser";
const tempPassword = "KHpNtmTzzXvxSuAH";
const tempHost = "datingapp.qxich.mongodb.net"
const tempDb = "datingapp"
// export const connectionString = `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.MONGO_INITDB_DATABASE}`;
export const connectionString = `mongodb+srv://${tempUser}:${tempPassword}@${tempHost}/${tempDb}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

export const createUser = async user => {

  const docUser = new User({
    firstName: user.firstName,
    email: user.email,
    passwordHash: user.passwordHash,
    age: user.age,
    gender: user.gender,
    orientation: user.orientation,
    profession: user.profession,
    hobbies: user.hobbies,
    politicalEconomics: user.politicalEconomics,
    politicalDiplomatic: user.politicalDiplomatic,
    politicalCivil: user.politicalCivil,
    politicalSocietal: user.politicalSocietal,
  });

  const emailAlreadyInDb = await User.exists({ email: user.email });
  if (emailAlreadyInDb) {
    throw new BadRequestException('Email already registered in the database.');
  } else {
    docUser.save().then(() => console.log(`${user.email} has registered`));
  }
};

export const getAllUsersFromDb = () => {

  return User.find(function(err, users) {
    if (err) throw new BadRequestException('Server error.');
    console.log('GET /users');
    return users;
  });
};


// ******* COMMENTS SECTION /////
export const addCommentToDB = async comment => {

  let doc = new Comment({
    movieId: comment.movieId,
    movieComment: comment.movieComment,
  });

  const movieAlreadyInDB = await Movie.exists({ id: comment.movieId });

  if (!movieAlreadyInDB) {
    throw new BadRequestException('Movie not in the database yet. Please add it first.');
  } else {
    currentComments = await getCurrentComments();
    let newComments;
    currentComments.push(comment.movieComment);
    newComments = [...currentComments];
    Movie.findOneAndUpdate(
      { id: comment.movieId },
      { comments: newComments },
      { useFindAndModify: false },
      function(err, ok) {
        doc.save().then(doc => {
          console.log('POST /comments');
        });
      });
  }

  async function getCurrentComments() {
    let currentComments = await Movie.find({ id: comment.movieId }, function(err, obj) {
      return obj['comments'];
    });
    if (currentComments[0]) {
      // @ts-ignore
      return currentComments[0].toObject().comments;
    }
    return [];
  }
};


/*
   Returns only movies with comments
   Returned object has only 'title' and 'comments' properties
 */

export const getCommentsFromDB = async () => {
  return Movie.find({'comments.0': {'$exists': true}},
      '-_id -director -runtime -country -__v -year -id',
      function (err, comments) {
        if (err) return console.error(err);
        console.log('GET /comments');
        return comments;
      });

};