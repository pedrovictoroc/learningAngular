export class UserModel {
    username: string; // email or cpf
    password: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  }
  