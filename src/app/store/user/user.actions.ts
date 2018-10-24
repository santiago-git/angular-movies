import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

// Action types
export const USER_LOAD = '[USER] Load';
export const SET_USER = '[USER] SetUser';

// Actions declaration
export class UserLoad implements Action {
    readonly type = USER_LOAD;
}
export class SetUser implements Action {
    readonly type = SET_USER;

    constructor(public user: User) { }
}

// Export actions
export type Actions = UserLoad | SetUser;
