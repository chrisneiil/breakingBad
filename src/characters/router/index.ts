export interface Ruta {
  path: string| undefined,
  component?:any| undefined,
  name:string| undefined,
  redirect?:string| undefined,
  children?:[] | undefined
}