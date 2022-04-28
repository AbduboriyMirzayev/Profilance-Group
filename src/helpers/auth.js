import { getUsers } from "mocks";
import { authError } from "utils/errors";

const users = getUsers();

export function checkAuthAndGetUserOrError(login, password) {
  const user = users?.find(
    (user) => user.login === login && user.password === password
  );
  return { user, error: user === undefined && authError };
}
