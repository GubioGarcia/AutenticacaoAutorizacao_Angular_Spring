export class User {
  public id?: number;
  public username: string;
  public password: string;
  public roles: string[];
  public active: boolean;

  constructor(username: string, password: string, roles: string[], active: boolean) {
    this.username = username;
    this.password = password;
    this.roles = roles;
    this.active = active;
  }
}
