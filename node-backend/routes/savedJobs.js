var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");

router.get("/", async function (req, res, next) {
  console.log(
    "============================In of the rest request savedJobs ====================="
  );
  console.log("Request body:" + JSON.stringify(req.query));
  kafka.make_request("admin_getsavedjobs", "response_topic", req.query, function (
    err,
    results
  ) {
    console.log("in result");
    console.log("Result ", results, " Error:", err);
    if (err) {
      res.send({ status: "error", msg: err });
    } else {
      res.send({ status: "success", msg: "success", data: results });
    }
    console.log(
      "============================Out of the rest request savedJobs ====================="
    );
  });
});

module.exports = router;
