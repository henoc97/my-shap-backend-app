import { UserService } from '../service/user.service';
import { User } from '../../domain/entities/user.entity';

export class FindUser {
  constructor(private UserService: UserService) {}

  async execute(userId: number): Promise<User | null> {
    return await this.UserService.findUserById(userId);
  }
}
