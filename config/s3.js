// // config/s3.js
// const AWS = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// // Configure AWS SDK
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

// const s3 = new AWS.S3();

// // Set up multer-s3 to handle file uploads to S3
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_BUCKET_NAME,
//     acl: 'public-read', // Make the files publicly readable
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString() + '-' + file.originalname); // Save file with unique name
//     }
//   })
// });

// module.exports = upload;

const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid'); // To generate unique filenames

// Create an S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Set up multer-s3 to handle file uploads to S3
const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.AWS_BUCKET_NAME,
    key: function (req, file, cb) {
      const fileKey = `${uuidv4()}-${file.originalname}`; // Use UUID for unique filename
      cb(null, fileKey); // Save file with unique name
    }
  })
}).fields([
  { name: 'image', maxCount: 1 }, // Field for image
  { name: 'file', maxCount: 1 }   // Field for PDF or other files
]);

module.exports = upload;

