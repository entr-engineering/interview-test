// @ts-ignore: isolated modules error
const proxy = require("http-proxy-middleware");
const AUTH = "http://localhost:8099";

module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: AUTH,
      pathRewrite: { "^/api": "/" },
    })
  );
};
