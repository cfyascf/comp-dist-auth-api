import { registerUserService, loginUserService, forgotPasswordService, changePasswordService } from "../services/userService.js";

const registerUserController = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        const result = await registerUserService(name, password, email);
        return res.status(200).json(result);
        
    } catch (err) {
        return res.status(401).json({ error: err.message });
    }
};

const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    try{
        const result = await loginUserService(email, password);
        return res.status(200).json(result);
    } catch(err){
        return res.status(401).json({ error: err.message }); 
    }
};

const forgotPasswordController = async (req, res) => {
    try {
        const result = await forgotPasswordService(req.user.id);
        return res.status(200).json(result);

    } catch (err) {
        return res.status(401).json({ error: err.message });
    };
};

const changePasswordController = async (req, res) => {
    const { userId, oldPassword, newPassword, repeatNewPassword } = req.body;

    try {
        const result = await changePasswordService(email);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(401).json({ error: err.message });
    };
};


export { 
    registerUserController, 
    loginUserController, 
    forgotPasswordController,
    changePasswordController
};