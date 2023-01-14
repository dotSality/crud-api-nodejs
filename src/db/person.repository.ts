import { PersonDTO, PersonInterface } from "../interfaces/person.interface";

export class PersonRepository {
  private users: PersonInterface[];

  // isOperating: boolean;

  constructor() {
    this.users = [];
    // this.isOperating = false;
  }

  public async findAll(): Promise<PersonInterface[]> {
    return new Promise((res) => {
      const allUsers = this.users;

      res(allUsers);
    });
  }

  public async findOneById(id: string): Promise<PersonInterface | undefined> {
    return new Promise((res) => {
      const person = this.users.find((person) => person.id === id);

      res(person);
    });
  }

  public async update(id: string, personData: Partial<PersonDTO>): Promise<PersonInterface | undefined> {
    return new Promise((res) => {
      const personIndex = this.users.findIndex((person) => person.id === id);
      if (personIndex > 0) {
        this.users[personIndex] = { ...this.users[personIndex], ...personData } as PersonInterface;
        res(this.users[personIndex]);
      }
      res(undefined);
    });
  }

  public async delete(id: string): Promise<string | undefined> {
    return new Promise((res) => {
      const personIndex = this.users.findIndex((person) => person.id === id);
      if (personIndex > 0) {
        this.users.splice(personIndex, 1);
        res(id);
      }
      res(undefined);
    });
  }
}