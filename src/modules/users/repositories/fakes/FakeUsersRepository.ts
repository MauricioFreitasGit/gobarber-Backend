import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import { uuid } from 'uuidv4';
import User from '../../infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
    private users: User[] = [];

    public async findByEmail(email: string): Promise<User | undefined> {
        const Finduser = this.users.find(p => p.email === email);
        return Finduser;
    }

    public async findById(id: string): Promise<User | undefined> {
        const Finduser = this.users.find(p => p.id === id);
        return Finduser;
    }

    public async create(userData: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, { id: uuid() }, userData);

        this.users.push(user);
        return user;
    }

    public async save(user: User): Promise<User> {
        const findIndex = this.users.findIndex(u => u.id === user.id);

        this.users[findIndex] = user;

        return user;
    }
}

export default FakeUsersRepository;
