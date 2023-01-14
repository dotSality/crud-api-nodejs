import * as dotenv from "dotenv";
import { server } from "./src/server";

dotenv.config();

const port = process.env["PORT"] || 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});