import path from 'path';
import fs from 'fs';
import User from '@modules/users/infra/typeorm/entities/User';
import UploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
    avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository,
    ) {}

    public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
        const user = await this.userRepository.findById(user_id);

        if (!user) {
            throw new AppError('Onlyn authenticated users can', 400);
        }
        // Deletar avatar anterios

        if (user.avatar) {
            const userAvatarFilePath = path.join(
                UploadConfig.directory,
                user.avatar,
            );
            const userAvatarFileExists = await fs.promises.stat(
                userAvatarFilePath,
            );

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;
        await this.userRepository.save(user);
        return user;
    }
}

export default UpdateUserAvatarService;
