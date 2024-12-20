import clientPromise from "../lib/mongodb.js";
import { ScheduleData, Schedule } from "../models/schedule.js";

export default class ScheduleService {
  static async getSchedule(year) {
    const client = await clientPromise;
    const data = await client
      .db("schedule")
      .collection(`${year}`)
      .find({})
      .toArray();

    if (!data || data.length === 0) {
      // console.log("No data found");
      return null;
    }

    const schedules = data.map((month) => {
      const scheduleDatas = month.schedule.map(
        (item) =>
          new ScheduleData(
            item._id,
            item.category,
            item.day,
            item.date,
            item.event,
            item.time
          )
      );
      return new Schedule(month._id, scheduleDatas);
    });

    // console.log(schedules);
    return schedules;
  }

  static async getScheduleByMonthYear(month, year) {
    const client = await clientPromise;
    const data = await client
      .db("schedule")
      .collection(`${year}`)
      .find({ _id: month })
      .toArray();

    if (!data || data.length === 0) {
      // console.log("No data found");
      return null;
    }

    // console.log(data);

    const schedules = data.map((month) => {
      const scheduleDatas = month.schedule.map(
        (item) =>
          new ScheduleData(
            item._id,
            item.category,
            item.day,
            item.date,
            item.event,
            item.time
          )
      );
      return new Schedule(month._id, scheduleDatas);
    });

    // console.log(schedules);
    return schedules;
  }
}
