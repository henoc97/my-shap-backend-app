import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findUserById(userId: number): Promise<User | null> {
    return await this.userRepository.findById(userId);
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
