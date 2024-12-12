export default function emailTemplate(otp) {
  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifikasi Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h2 {
      color: #007bff;
      margin-bottom: 15px;
    }
    .otp {
      font-size: 28px;
      font-weight: bold;
      color: #333;
      margin: 20px 0;
      letter-spacing: 2px;
    }
    p {
      margin: 10px 0;
    }
    .footer {
      font-size: 12px;
      color: #777;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Verifikasi Email</h2>
    <p>Terima kasih telah mendaftar. Silakan gunakan OTP berikut untuk memverifikasi alamat email Anda:</p>
    <p class="otp">${otp}</p>
    <p>OTP ini akan kedaluwarsa dalam <strong>10 menit</strong>.</p>
    <p>Jika Anda tidak meminta verifikasi ini, harap abaikan email ini.</p>
    <div class="footer">© ${new Date().getFullYear()} FJKT48 Team. All rights reserved.</div>
  </div>
</body>
</html>`;
}
