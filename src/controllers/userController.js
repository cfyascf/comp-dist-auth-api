import { registerUserService, loginUserService, forgotPasswordService } from "../services/userService.js";

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
    const { email } = req.body;

    try {
        const result = await forgotPasswordService(email);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(401).json({ error: err.message });
    };
};

export { 
    registerUserController, 
    loginUserController, 
    forgotPasswordController 
};