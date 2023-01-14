import { personRepository } from "../server";
import { IncomingMessage, ServerResponse, STATUS_CODES } from "http";
import { DEFAULT_CONTENT_TYPE, HTTP_STATUS_CODES } from "../utils/constants";

export class PersonController {

  async getPersons(_: never, res: ServerResponse): Promise<void> {
    try {
      const persons = await personRepository.findAll();

      res.writeHead(HTTP_STATUS_CODES.OK, DEFAULT_CONTENT_TYPE);
      res.end(JSON.stringify(persons));
    } catch {
      res.writeHead(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, DEFAULT_CONTENT_TYPE);
      res.end(JSON.stringify({ message: STATUS_CODES[HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR] }));
    }
  }

  async getPersonById(req: IncomingMessage, res: ServerResponse): Promise<void> {

  }
}