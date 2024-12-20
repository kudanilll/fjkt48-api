import ScheduleService from "../services/schedule.js";

export default class ScheduleController {
  static async getSchedule(req, res) {
    const { year } = req.params;
    try {
      const schedule = await ScheduleService.getSchedule(year);
      if (!schedule) {
        return res.status(404).json({
          success: false,
          message: "Schedule not found: " + year,
          content: [],
        });
      }
      res.status(200).json({
        success: true,
        message: "Success fetch schedule: " + year,
        content: schedule,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getScheduleByMonthYear(req, res) {
    const { month, year } = req.params;
    try {
      const schedule = await ScheduleService.getScheduleByMonthYear(
        month,
        year
      );
      if (!schedule) {
        return res.status(404).json({
          success: false,
          message: "Schedule not found: " + year + " " + month,
          content: [],
        });
      }
      res.status(200).json({
        success: true,
        message: "Success fetch schedule: " + year + " " + month,
        content: schedule,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
