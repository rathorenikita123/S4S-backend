import { Request, Response } from "express";
import { user } from "../entity/user";
import {AppDataSource} from "../../ormconfig";

const User = AppDataSource.getRepository(user);

const create = async (req: Request, res: Response) => {

    try {
        const { name, email, phone, profile_image, status } = req.body;
        const newuser = User.create({ name, email, phone, profile_image, status });
        await User.save(newuser);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newuser
        });
    }
    catch (error) {
        console.log(error);
    }
}
export default create;

