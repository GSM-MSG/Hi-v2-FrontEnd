import API from "./instance"

export const del = async <T>(...args: Parameters<typeof API.delete>) =>
  await API.delete<T, T>(...args)

export const get = async <T>(...args: Parameters<typeof API.get>) =>
  await API.get<T, T>(...args)

export const patch = async <T>(...args: Parameters<typeof API.patch>) =>
  await API.patch<T, T>(...args)

export const post = async <T>(...args: Parameters<typeof API.post>) =>
  await API.post<T, T>(...args)
