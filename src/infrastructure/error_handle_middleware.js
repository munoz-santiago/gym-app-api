const error_handle_middleware = (controller) => {
    return (req, res) => {
        try{
            const response = controller({
                headers: req.headers,
                data: req.body,
            });
            res.status(200).send(response);
        } catch(e) {
            console.error('ERROR::: ', e);
            res
                .status(e.err_status || 500)
                .send({
                    err_code: e.err_code || 'internal_server_error',
                    err_msg: e.err_message || 'Internal Server Error',
                });
        }
    };
};

export default error_handle_middleware;
