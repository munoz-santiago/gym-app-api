import express from'express';
import bodyParser from 'body-parser';

import login_user_controller from './infrastructure/controllers/login_user.js';
import routes from './infrastructure/routes.js';
import error_handle_middleware from './infrastructure/error_handle_middleware.js';

const port = 3000;
const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post(routes.LOGIN_USER,  error_handle_middleware(login_user_controller));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
