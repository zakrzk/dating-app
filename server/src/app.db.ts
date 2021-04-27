// @ts-nocheck
import * as mongoose from 'mongoose';
import {BadRequestException} from '@nestjs/common';
import {UserSchema} from './users/user.schema';
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken';

const User = mongoose.model('User', UserSchema);

const tempUser = "dbUser";
const tempPassword = "KHpNtmTzzXvxSuAH";
const tempHost = "datingapp.qxich.mongodb.net"
const tempDb = "datingapp"
// export const connectionString = `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.MONGO_INITDB_DATABASE}`;
export const connectionString = `mongodb+srv://${tempUser}:${tempPassword}@${tempHost}/${tempDb}`;

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

export const createUser = async user => {
    let hashedPass = await bcrypt.hash(user.passwordHash, 12);
    const docUser = new User({
        firstName: user.firstName,
        email: user.email,
        passwordHash: hashedPass,
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

    const emailAlreadyInDb = await User.exists({email: user.email});
    if (emailAlreadyInDb) {
        throw new BadRequestException('Email already registered in the database.');
    } else {
        docUser.save().then(() => console.log(`${user.email} has registered`));
    }
};

export const getAllUsersFromDb = () => {
    // This should not be exposed to public in production!
    return User.find(function (err, users) {
        if (err) throw new BadRequestException('Server error.');
        console.log('GET /users');
        return users;
    });
};

export const getUserById = async (id) => {
    return User.findOne({_id: id},
        function (err, user1) {
            if (err) return new Error('User not found or invalid data given.');
            return JSON.stringify(user1);
        });
}

export const getMatchesFromDb = async (id1, id2) => {

    const User1 = await User.findOne({_id: id1},
        function (err, user1) {
            if (err) return new Error('User not found or invalid data given.');
            return JSON.stringify(user1);
        });

    const User2 = await User.findOne({_id: id2},
        function (err, user2) {
            if (err) return new Error('User not found or invalid data given.');
            return JSON.stringify(user2);
        });

    // Step 1: Check if they are interested in each other (sexual orientation)
    const User1Gender = User1.gender;
    const User2Orientation = User2.orientation.map(_ => _.toLowerCase());

    if (!User2Orientation.includes(User1Gender)) {
        return 0;
        // return "Users are not interested in each others (sexual orientation) "
    }

    // Step 2: Calculate number of total and shared hobbies
    const User1Hobbies = User1.hobbies;
    const User2Hobbies = User2.hobbies;
    const hobbiesMerged = User1Hobbies.concat(User2Hobbies);
    // delete duplicates
    const hobbiesMergedFiltered = hobbiesMerged.filter(function (item, pos) {
        return hobbiesMerged.indexOf(item) == pos;
    })
    const unionCardinal = hobbiesMergedFiltered.length;
    const intersectionCardinal = User1Hobbies.length + User2Hobbies.length - unionCardinal

    const hobbyMatchLevel = Math.floor(intersectionCardinal / unionCardinal * 100)

    // Step 3: Calculate politics compass matching

    const User1Economics = User1.politicalEconomics;
    const User2Economics = User2.politicalEconomics;

    const User1Diplomatic = User1.politicalDiplomatic;
    const User2Diplomatic = User2.politicalDiplomatic;

    const User1Civil = User1.politicalCivil;
    const User2Civil = User2.politicalCivil;

    const User1Societal = User1.politicalSocietal;
    const User2Societal = User2.politicalSocietal;

    let economicsDifference = Math.abs(User1Economics - User2Economics); // i.e. |(-3) - (+2)|
    let economicsMatch = (10 - economicsDifference) / 10;

    let diplomaticDifference = Math.abs(User1Diplomatic - User2Diplomatic);
    let diplomaticMatch = (10 - diplomaticDifference) / 10;

    let civilDifference = Math.abs(User1Civil - User2Civil);
    let civilMatch = (10 - civilDifference) / 10;

    let societalDifference = Math.abs(User1Societal - User2Societal);
    let societalMatch = (10 - societalDifference) / 10;

    let politicsMatchLevel = (economicsMatch + diplomaticMatch + civilMatch + societalMatch) / 4 * 100;
    const finalMatchLevel = Math.floor((hobbyMatchLevel * 0.7) + (politicsMatchLevel * 0.3));
    return finalMatchLevel;

};


export const loginUserViaDb = async (email, passwordFromLoginForm) => {

    console.log("POST /users");
    if (!email || !passwordFromLoginForm) {
        return {err: "missing email or password"}
    }
    let tempUser;

    const user = await User.findOne({email: email},
        function (err, user) {
            if (err) return {err: 'User not found or invalid data given.'};
            return JSON.stringify(user);
        });

    tempUser = user;

    if (!user) {
        return {err: "email not registered"}
    }

    if (!user.passwordHash || !passwordFromLoginForm) {
        return {err: "Invalid data given"}
    }

    return await bcrypt.compare(passwordFromLoginForm, user.passwordHash)
        .then(passMatch => {
            if (!passMatch) {
                return {err: 'Email / password did not match.'}
            }
            const token = jwt.sign({
                    userId: tempUser._id,
                    email: tempUser.email
                },
                "my_jwt_secret",
                {expiresIn: "72h"},
            );
            return {userId: tempUser._id, token: token};
        })
        .catch(err => console.log(err))
};

