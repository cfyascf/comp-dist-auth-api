import User from '../models/User.js';
import { generateToken, hashPassword } from './handlerService.js';

const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';

const registerUserService = async (name, password, emailAsLogin) => {
    const existingUser = await User.findOne({ login: emailAsLogin });
    if (existingUser) {
        throw new Error('Email already registered.');
    }

    const newUser = new User({
        name,
        login: emailAsLogin,
        password: hashPassword(password),
        emailConfirmed: false
    });

    await newUser.save();

    const userObject = newUser.toObject();
    delete userObject.password;

    return { message: "User registered successfully!", data: userObject, token: generateToken(userObject._id, userObject.role)};
};

const loginUserService = async (emailAsLogin, password) => {
    const user = await User.findOne({ login: emailAsLogin });

    if(!user) 
        throw new Error('Invalid credentials');

    // if(!user.emailConfirmed) 
    //     throw new Error('Email not confirmed.');

    if(user.password !== password) 
        throw new Error('Invalid credentials');
    
    const userObject = user.toObject();
    delete userObject.password;

    return { message: "User logged in successfully!", data: user, token: generateToken(user.id, user.role)};
};

const forgotPasswordService = async (userId) => {
    const user = await User.findById(userId);

    if(!user) 
        throw new Error("Invalid credentials.");

    // ..send email in here

    return { message: "Check your email to reset your password.", data: null };
};

const changePasswordService = async (userId, oldPassword, newPassword, repeatNewPassword) => {
    const user = await User.findById( userId );

    if(!user) 
        throw new Error("User does not exists.");

    if(oldPassword != user.password){
        throw new Error("Password does not match.");
    }

    if(oldPassword == newPassword){
        throw new Error("Password matches the old one.");
    }

    if(newPassword != repeatNewPassword){
        throw new Error("Passwords does not match.");
    }

    user.password = newPassword;
    user.save();

    const userObject = user.toObject();
    delete userObject.password;

    return { message: "Updated password sucessfully.", data: userObject };
};

export {
    registerUserService,
    loginUserService,
    forgotPasswordService,
    changePasswordService
};