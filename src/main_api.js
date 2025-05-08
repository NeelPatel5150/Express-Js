const expr = require("express");
const app = expr();
const api = require("./api.js");
app.use("/",api);
app.listen(7899);