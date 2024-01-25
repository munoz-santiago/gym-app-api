export default class BaseException extends Error {
    constructor(err_code, err_status, err_message) {
        super(err_message);

        this.err_code = err_code;
        this.err_status = err_status;
        this.err_message = err_message;
    }
}