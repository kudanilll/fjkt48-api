export class ScheduleData {
  constructor(id, category, day, date, event, time) {
    this._id = id; // Tanggal
    this.category = category; // "jkt48" | "trainee" | "event"
    this.day = day; // Hari acara, exam. "Minggu"
    this.date = date; // Tanggal acara, exam. "1 Januari 2024"
    this.event = event; // Nama acara, exam. "Tunas di Balik Seragam"
    this.time = time; // Waktu acara, exam. "15:00 WIB"
  }
}

export class Schedule {
  constructor(id, schedule = []) {
    this._id = id; // Nama bulan
    this.schedule = schedule; // Daftar jadwal (array of ScheduleData)
  }

  // Method untuk menambahkan item ke jadwal
  addScheduleData(scheduleData) {
    if (scheduleData instanceof ScheduleData) {
      this.schedule.push(scheduleData);
    } else {
      throw new Error(
        "Invalid schedule item. Must be an instance of ScheduleData."
      );
    }
  }
}
