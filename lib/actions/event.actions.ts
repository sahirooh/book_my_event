'use server'

import { CreateEventParams } from "@/types"
import { connectToDatabase } from "../database"
import { handleError } from "../utils"
import User from "../database/models/user.model"

export const createEvent = async ({event, userId, path}: CreateEventParams) => {
    try {
        await connectToDatabase()

        const organizer = await User.findById(userId);
    } catch (error) {
        handleError(error);
    }
}