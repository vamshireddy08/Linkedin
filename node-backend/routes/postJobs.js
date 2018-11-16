var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");
var kafka = require("../kafka/client");


//Setup for Aws S3
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const multer = require('multer');

aws.config.update({
    secretAccessKey: CONST.awsS3Key,
    accessKeyId: CONST.awsS3Id,
    region: CONST.awsS3Region
});

var s3 = new aws.S3();


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: CONST.ResumesBucket,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});


router.post("/", upload.single('files'),function(req, res, next) {
    console.log(
        "============================In of the rest request postJob ====================="
    );

    console.log("Request Body: " + JSON.stringify(req.body));
    //send body to kafka server
    kafka.make_request(
        "post_job","post_job",req.body,
        function(err, doc) {
            console.log("in result");
            console.log("Result ", doc, " Error:", err);
            if (!err && !doc) {
                res.send({
                    status: "error",
                    msg: "Error occured"
                });
            } else if (err) {
                res.send({ status: "error", msg: err });
            } else {
                res.send({
                    status : "success",
                    msg : doc
                })
            }
            console.log(
                "============================out of the rest request postJob ====================="
            );
        }
    );
});

module.exports = router;
