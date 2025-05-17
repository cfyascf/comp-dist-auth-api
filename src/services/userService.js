import User from '../models/User.js';

const registerUserService = async (name, password, emailAsLogin) => {
    const existingUser = await User.findOne({ login: emailAsLogin });
    if (existingUser) {
        throw new Error('Email already registered.');
    }

    const newUser = new User({
        name,
        login: emailAsLogin,
        password: password,
        emailConfirmed: false
    });

    await newUser.save();

    const userObject = newUser.toObject();
    delete userObject.password;

    return { message: "User registered successfully!", data: userObject};
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

    return { message: "User logged in successfully!", data: userObject};
};

const forgotPasswordService = async (emailAsLogin) => {
    const user = await User.findOne({ login: emailAsLogin });

    if(!user) 
        throw new Error("Invalid credentials.");


    return { message: "Check your email to reset your password.", data: null };
};

export {
    registerUserService,
    loginUserService,
    forgotPasswordService
};