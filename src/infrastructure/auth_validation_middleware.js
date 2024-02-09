import { UserIsNotAuthenticatedError } from '../domain/user/exceptions.js';

const auth_validation_middleware = (controller) => {
    return ({ headers, ...props }) => {
        const authorizationToken = headers['authorization'];
        if (authorizationToken !== 'Token:quemado:::1b9483d39936142a75c2ee6d6053a3e2') throw new UserIsNotAuthenticatedError();

        return controller({ headers, ...props });
    };
};

export default auth_validation_middleware;
