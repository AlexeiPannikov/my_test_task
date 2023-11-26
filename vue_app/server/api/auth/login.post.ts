const users = [
  {
    login: "root",
    password: "root",
    name: "Admin",
  },
];

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = users.find(
    (item) => item.login === body.login && item.password === body.password,
  );
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "Wrong login or password",
    });
  }
  return user;
});
