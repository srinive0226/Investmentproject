const router = require('express').Router();
const path = require('path');

const referenceRoutes = require("./api/reference.routes");
router.use("/reference", referenceRoutes)

const referencepersonRoutes = require("./api/referenceperson.routes");
router.use("/referenceperson", referencepersonRoutes)

const fundRoutes = require("./api/fund.routes");
router.use("/fund", fundRoutes)

const investmentRoutes = require("./api/investment.routes");
router.use("/investment", investmentRoutes)

const investmentformRoutes = require("./api/investmentform.routes");
router.use("/investmentform", investmentformRoutes)

const interestRoutes = require("./api/interest.routes");
router.use("/interest", interestRoutes)

const reportRoutes = require("./api/report.routes");
router.use("/reports", reportRoutes)


module.exports = router;