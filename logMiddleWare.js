// Middleware simple function
// Requests from the server file which it then logs
function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Move onto the next function
}

module.exports = loggerMiddleware;