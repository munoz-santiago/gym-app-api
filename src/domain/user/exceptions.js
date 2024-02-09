import BaseException from '../base_exception.js';

export class InvalidUsernameAndPasswordError extends BaseException {
    constructor() {
        super('invalid_credentials', 403, 'Invalid username/password.');
    }
}

export class UserIsNotAuthenticatedError extends BaseException {
    constructor() {
        super('user_is_not_authenticated', 403, 'User is not authenticated.');
    }
}
