import express from'express';
import bodyParser from 'body-parser';

import login_user_controller from './infrastructure/controllers/login_user.js';
import workout_templates_controller from './infrastructure/controllers/workout_templates.js';
import routes from './infrastructure/routes.js';
import error_handle_middleware from './infrastructure/error_handle_middleware.js';
import auth_validation_middleware from './infrastructure/auth_validation_middleware.js';

const port = 3000;
const app = express();

const privRoute = (controller) => error_handle_middleware(auth_validation_middleware(controller));
const pubRoute = (controller) => error_handle_middleware(controller);

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post(routes.LOGIN_USER,  pubRoute(login_user_controller));
app.get(routes.WORKOUT_TEMPLATES,  privRoute(workout_templates_controller));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
