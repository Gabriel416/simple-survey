export default length => {
  let result = "";
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*~";
  for (let i = 0; i < length; i++)
    result += chars[Math.round(Math.random() * (chars.length - 1))];

  return result;
};
