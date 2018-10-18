export class User {
    _id?: string;
    username: string;
    email: string;
    password?: string;
}

export class Auth {
    jwt: string;
    user: User;
}
