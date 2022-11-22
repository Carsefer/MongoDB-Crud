import { connect } from "mongoose";
import { MONGODB_URL } from "./config";

(async () => {
  try {
    const db = await connect(MONGODB_URL);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
