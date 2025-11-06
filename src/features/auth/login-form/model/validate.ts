export function validateLoginForm(data: {
  username: string;
  password: string;
}) {
  const errors: Partial<typeof data> = {};

  if (!data.username.trim()) {
    errors.username = "Username is required";
  }

  if (!data.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
}
