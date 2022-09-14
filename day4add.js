
export class user {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
export function printUserName(user){
    console.log(`${user.firstName} ${user.lastName}`)
}

