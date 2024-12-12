import { DateTime } from "luxon";

// Fungsi untuk mengonversi waktu UTC ke waktu Jakarta
export function convertToJakartaTime(utcDate) {
  return DateTime.fromJSDate(utcDate) // Konversi dari JavaScript Date object
    .setZone("Asia/Jakarta") // Set timezone ke Asia/Jakarta (GMT+7)
    .toFormat("yyyy-LL-dd HH:mm:ss"); // Format output
}

// Fungsi untuk menghitung selisih waktu
export function calculateTimeDifference(registeredAt) {
  const now = DateTime.now().setZone("Asia/Jakarta"); // Waktu saat ini dalam Jakarta time zone
  const registeredTime = DateTime.fromFormat(
    registeredAt,
    "yyyy-LL-dd HH:mm:ss",
    { zone: "Asia/Jakarta" }
  );

  const diff = now.diff(registeredTime, ["days", "hours", "minutes"]); // Hitung selisih waktu dalam hari, jam, dan menit

  let timeDifference = "";
  const days = diff.days;
  const hours = diff.hours;
  const minutes = Math.floor(diff.minutes);

  if (days > 0) {
    timeDifference = `${days} days ago`;
  } else if (hours > 0) {
    timeDifference = `${hours} hours ago`;
  } else if (minutes > 0) {
    timeDifference = `${minutes} minutes ago`;
  } else {
    timeDifference = "just now";
  }

  return timeDifference;
}
