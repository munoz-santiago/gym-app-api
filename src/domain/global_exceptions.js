import BaseException from './base_exception.js';

export class RequiredFieldsError extends BaseException {
    constructor(message) {
        super('required_fields', 400, message);
    }
}
