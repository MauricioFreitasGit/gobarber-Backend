import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import CreateUserService from './CreateUserService';
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUser', () => {
    it('should be able to create a new user', async () => {
        const fakeUsersRepository = new FakeUserRepository();
        const fakeHashProvider = new FakeHashProvider();
        const createUsers = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );
        const user = await createUsers.execute({
            name: 'Fulano',
            email: 'fulano@fulano',
            password: '123456',
        });
        expect(user).toHaveProperty('id');
    });

    it('should not be able to create a new user with same email find another', async () => {
        const fakeUsersRepository = new FakeUserRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUsers = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );
        await createUsers.execute({
            name: 'Fulano',
            email: 'fulano@fulano',
            password: '123456',
        });
        expect(
            createUsers.execute({
                name: 'Fulano',
                email: 'fulano@fulano',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
