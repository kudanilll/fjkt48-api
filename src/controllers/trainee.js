import TraineeService from "../services/trainee.js";

export default class TraineeController {
  static async getAllTrainee(req, res) {
    const trainees = await TraineeService.getAllTrainee();
    if (trainees === null) {
      res.status(404).json({
        success: false,
        message: "Trainees not found",
        content: [],
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Success fetch all trainee",
        content: trainees,
      });
    }
  }

  // Mengambil trainee berdasarkan nama
  static async getTraineeById(req, res) {
    const { id } = req.params; // Ambil 'id' dari URL params
    // console.log(id);
    try {
      const trainee = await TraineeService.getTraineeById(id);
      if (!trainee) {
        return res.status(404).json({
          success: false,
          message: "Id not found: " + id,
          content: [],
        });
      }
      res.status(200).json({
        success: true,
        message: "Success fetch id: " + id,
        content: trainee,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
