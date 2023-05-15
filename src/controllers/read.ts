import { Request, Response } from "express";
import { user } from "../entity/user";
import {AppDataSource} from "../../ormconfig";

const User = AppDataSource.getRepository(user);

const read = async (req: Request, res:Response) => {

    try{
        console.log(req.params.id);
        const user = await User.findOne({where:{id: req.params.id}});
        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user
        });

    }
    catch(error){
        console.log(error);
    }
}

export default read;