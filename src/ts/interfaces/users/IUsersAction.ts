import { IUser } from "./IUser";

export interface IUsersAction {
    type:string,
    usersload:IUser[],
    userload_id:number
}