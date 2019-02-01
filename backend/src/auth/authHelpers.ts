import bcrypt from "bcrypt";

export function checkPasswordsMatch(
  providedPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(providedPassword, hashedPassword);
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}
