const router = require("express").Router();

const userRoutes = require("./user-routes");
const jokeRoutes = require("./joke-routes");

router.use("/user", userRoutes);
router.use("/jokes", jokeRoutes);

module.exports = router;