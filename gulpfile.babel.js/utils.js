import path from 'path'

export const getPath = it => path.resolve(__dirname, '..', it)
export const never = new Promise(() => {})