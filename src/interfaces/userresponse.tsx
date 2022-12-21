import userType from "./userInterface";

export default interface responseType {
    user: userType|any,
    error: string|null
}
