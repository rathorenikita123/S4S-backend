import { Request, Response } from "express";
import { user } from "../entity/user";
import {AppDataSource} from "../../ormconfig";

const User = AppDataSource.getRepository(user);

const list = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    }
    catch (error) {
        console.log(error);
    }
}

export default list;