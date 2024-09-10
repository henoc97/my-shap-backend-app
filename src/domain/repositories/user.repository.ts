import { User } from '../entities/user.entity';

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  save(user: User): Promise<User>;
  delete(userId: number): Promise<void>;
  findAll(): Promise<User[]>;
}
