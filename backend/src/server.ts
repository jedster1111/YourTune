import dotenv from "dotenv";
import { app } from "./app";
import { createDbConnection } from "./database/initDatabase";
import { insertTestData } from "./tests/testUtils/insertTestData";

dotenv.config();

const PORT = 8000;

createDbConnection()
  .then(async () => {
    console.log("Connected to database!");

    const users = await insertTestData(); // insert some starting data for dev purposes
    console.log("Inserted test data:", users);

    app.listen(PORT);
    console.log(`Server is listening on port ${PORT}`);
  })
  .catch(error => console.log(error));

process.on("SIGINT", () => {
  process.exit();
});
