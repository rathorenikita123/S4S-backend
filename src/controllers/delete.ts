import { Request, Response } from "express";
import { user } from "../entity/user";
import {AppDataSource} from "../../ormconfig";

const User = AppDataSource.getRepository(user);
const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({where: { id: req.params.id}})
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        await User.remove(user);
        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    }
    catch (error) {
        console.log(error);
    }
}

export default deleteUser;
