import { COMMON_WORDS, SPECIAL_SYMBOLS } from "./words";

export function generatePassword(): string {
  // Pull exactly 3 random words between 4 and 12 letters
  const filteredWords = COMMON_WORDS.filter(w => w.length >= 4 && w.length <= 12);
  
  const selectedWords = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    selectedWords.push(filteredWords[randomIndex]);
  }

  // Combine in CamelCase
  const base = selectedWords
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  // Append 2 random special symbols
  let symbols = "";
  for (let i = 0; i < 2; i++) {
    symbols += SPECIAL_SYMBOLS[Math.floor(Math.random() * SPECIAL_SYMBOLS.length)];
  }

  // Append 3 random digits
  let digits = "";
  for (let i = 0; i < 3; i++) {
    digits += Math.floor(Math.random() * 10).toString();
  }

  return `${base}${symbols}${digits}`;
}

export function checkPasswordStrength(password: string): number {
  let score = 0;

  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  return Math.max(1, score);
}
