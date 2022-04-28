import { InputError } from "./errors";

export const emptyFunction = () => {};

export function getInputRules() {
  return [
    {
      required: true,
      message: InputError,
    },
  ];
}

export function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return mm + "." + dd + "." + yyyy;
}
