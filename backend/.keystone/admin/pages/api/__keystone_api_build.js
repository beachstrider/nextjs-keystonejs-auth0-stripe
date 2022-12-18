exports.getConfig = () => require("../../../../keystone");
const x = Math.random();
exports.default = function (req, res) { return res.send(x.toString()) }
