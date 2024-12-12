const VALID_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
];

export function validateEmail(email) {
  // Basic email format validation using regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "Format email tidak valid",
    };
  }

  // Extract domain from email
  const domain = email.split("@")[1].toLowerCase();

  // Check if domain is in allowed list
  const mode = "TEST";
  if (mode !== "TEST") {
    if (!VALID_EMAIL_DOMAINS.includes(domain)) {
      return {
        isValid: false,
        message: "Domain email tidak diizinkan",
      };
    }
  }

  // Additional validation for username part
  const username = email.split("@")[0];

  // Check username length (minimum 3 characters, maximum 64 characters)
  if (username.length < 3 || username.length > 64) {
    return {
      isValid: false,
      message: "Panjang username email harus antara 3-64 karakter",
    };
  }

  // Check if username contains valid characters only
  const usernameRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]$/;
  if (!usernameRegex.test(username)) {
    return {
      isValid: false,
      message: "Username email mengandung karakter yang tidak valid",
    };
  }

  return {
    isValid: true,
    message: "Email valid",
  };
}

export function isEmpty(str) {
  return !str.trim().length;
}
