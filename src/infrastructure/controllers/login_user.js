import { InvalidUsernameAndPasswordError } from '../../domain/user/exceptions.js';
import { RequiredFieldsError } from '../../domain/global_exceptions.js';


const login_user_controller = ({ data }) => {
    const { username, password } = data;
    if (!username || !password) throw new RequiredFieldsError('username and password are required.');

    if (username !== 'santiago' || password !== 'colombia') throw new InvalidUsernameAndPasswordError();

    const token = 'Token:quemado:::1b9483d39936142a75c2ee6d6053a3e2';

    return {
        token,
    };
};

export default login_user_controller;
