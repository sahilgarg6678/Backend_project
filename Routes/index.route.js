const express = require("express");

const router = express.Router();
const homeRouter = require("./home.route");
const categoryRouter = require("./category.route");
const articlesRouter = require("./articles.route");

router.use("/TheSiren", homeRouter);
router.use("/TheSiren", categoryRouter);
router.use("/TheSiren", articlesRouter);


module.exports=router;