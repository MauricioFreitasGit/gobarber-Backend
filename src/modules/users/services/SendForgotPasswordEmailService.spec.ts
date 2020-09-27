import AppError from '@shared/errors/AppError';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
    it('should be able to recover the password using the email', async () => {
        const fakeUsersRepository = new FakeUserRepository();
        const fakeMailProvider = new FakeMailProvider();

        const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

        await fakeUsersRepository.create({
            email: 'mauricio@gmail.com',
            password: '123',
            name: 'mauricio',
        });

        const sendforgotpasswordemail = new SendForgotPasswordEmailService(
            fakeUsersRepository,
            fakeMailProvider,
        );

        await sendforgotpasswordemail.execute({
            email: 'mauricio@gmail.com',
        });

        expect(sendMail).toHaveBeenCalled();
    });
});
