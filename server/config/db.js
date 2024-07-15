const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://localhost:27017/artisan_hub", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
