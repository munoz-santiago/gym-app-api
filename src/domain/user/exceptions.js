import BaseException from '../base_exception.js';

export class InvalidUsernameAndPasswordError extends BaseException {
    constructor() {
        super('invalid_credentials', 403, 'Invalid username/password.');
    }
}
