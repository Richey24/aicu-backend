const express = require("express");
// const getOne = require("../controller/getOneController");
// const loginUser = require("../controller/loginController");
// const registerUser = require("../controller/registerController");
const connectDB = require("./db/connect");
const MongoDB_URL = require("./env");
const fileUpload = require("express-fileupload");
const uploadFile = require("./controller/uploadController");
// const deleteUser = require("../controller/deleteController");
// const getAll = require("../controller/getAllController");
const cors = require("cors");
const deleteImage = require("./controller/deleteImage");
const getAllImage = require("./controller/getAllImage");
// const completeRegister = require("../controller/completeController");
// const registerCourse = require("../controller/courseController");
// const shortenController = require("../controller/shortenController");
// const redirectController = require("../controller/redirectController");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

// const start = async () => {
//   try {
//     connectDB(MongoDB_URL);

//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// console.log(__dirname + "/aicu-backend/img");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.download("./img/");
  res.headersSent;
});
// app.post("/register", registerUser);
// app.post("/login", loginUser);
// app.post("/get", getOne);
// app.get("/get/all", getAll);
app.post("/upload", uploadFile);
app.get("/get/all/image", getAllImage);
app.post("/delete/image", deleteImage);
// app.post("/delete", deleteUser);
// app.post("/complete", completeRegister);
// app.post("/course", registerCourse);
// app.post("/shorten", shortenController);
// app.get("/:code", redirectController);
app.use("/image", express.static(__dirname + "/../aicu-backend/img"));
