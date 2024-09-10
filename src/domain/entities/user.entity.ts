export class User {
  constructor(
    private id: number,
    private name: string,
    private email: string | null,
    private balance: number = 0.0,
    private role: Role = Role.USER,
    private isActive: boolean = true,
    private createAt: Date = new Date(),
    private updateAt: Date = new Date(),
  ) {}

  activate(): void {
    this.isActive = true;
  }

  desactivate(): void {
    this.isActive = false;
  }

  // Getter and setter methods
  getId(): number {
    return this.id;
  }

  getEmail(): string | null {
    return this.email;
  }
  getName(): string {
    return this.name;
  }
}
