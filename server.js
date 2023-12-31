const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running.Use our API on port :${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

//AiE8rF3oxwV5odwM
//mongodb+srv://oleg:AiE8rF3oxwV5odwM@cluster0.2fjuaqk.mongodb.net/

//mongodb+srv://oleg:AiE8rF3oxwV5odwM@cluster0.2fjuaqk.mongodb.net/backend_Db?retryWrites=true&w=majority
