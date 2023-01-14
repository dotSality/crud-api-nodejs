import { PersonRepository } from "./db/person.repository";
import http from "http";

export const personRepository = new PersonRepository();

export const server = http.createServer();