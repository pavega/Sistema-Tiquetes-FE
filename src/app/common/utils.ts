export function validateCredentials(email: string, password: string): boolean {
  const emailTemp = 'user@gmail.com';
  const passTemp = '123';

  return email === emailTemp && password === passTemp;
}
