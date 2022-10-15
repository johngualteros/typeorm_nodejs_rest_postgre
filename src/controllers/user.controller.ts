import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;

    await user.save();
    return res.status(201).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};
export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find()
        return res.status(200).send(users)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ message: err.message })
        }
    }
};
export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({id: parseInt(req.params.id)})
        if (!user) return res.status(404).json({ message: 'User not found' })
        return res.status(200).send(user)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ message: err.message })
        }
    }
};
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({id: parseInt(req.params.id)})
        if (!user) return res.status(404).json({ message: 'User not found' })
        await user.remove()
        return res.status(200).json({ message: 'User deleted' })
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ message: err.message })
        }
    }
};
export const updateUser = async (req: Request, res: Response) => {
    try {
        // const { firstname, lastname, activate } = req.body
        const user = await User.findOneBy({ id: parseInt(req.params.id) })
        if (!user) return res.status(404).json({ message: 'User not found' })
        // user.firstname = firstname
        // user.lastname = lastname
        // user.activate = activate
        // await user.save()
        await User.update({ id: parseInt(req.params.id) }, req.body)
        return res.sendStatus(204)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ message: err.message })
        }
    }
};
