import { Request, Response } from "express";
import { user } from "../entity/user";
import {AppDataSource} from "../../ormconfig";

const User = AppDataSource.getRepository(user);

const update = async (req: Request, res: Response) => {
    try{

        const user = await User.findOne({where:{id: req.params.id}});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const { name, email, phone, profile_image, status } = req.body;
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.profile_image = profile_image;
        user.status = status;
        await User.save(user);
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });
    }
    catch(error){
        console.log(error);
    }
}

export default update;