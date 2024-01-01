'use server'

import { CreateEventParams } from "@/types"
import { connectToDatabase } from "../database"
import { handleError } from "../utils"
import User from "../database/models/user.model"
import Event from "../database/models/event.model"

export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("Organizer not found");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
}

export const getEventById = async (eventId: string) => {
  try {
    await connectToDatabase();

    const event = await Event.findById(eventId);

    if(!event) throw new Error("Event not found");

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
}