import { createConnection } from "typeorm";
import Post from "../entities/Post";
import { DB_URL, __prod__ } from "./constants";
import logger from "./logger";

const connectDb = async () => {
  try {
    await createConnection({
      type: "postgres",
      url: DB_URL,
      synchronize: !__prod__,
      logging: !__prod__,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [Post],
    });
    logger.info("Connected to database");
  } catch (err) {
    logger.error(`Error connecting to db: ${err}`);
  }
};

export default connectDb;
