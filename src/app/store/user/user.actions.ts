import { Action } from '@ngrx/store'
import { User } from './../../models/user'

// Action types
export const USER_LOAD = '[USER] Load'

// Actions declaration
export class UserLoad implements Action {
    readonly type = USER_LOAD
}

// Export actions
export type Actions = UserLoad