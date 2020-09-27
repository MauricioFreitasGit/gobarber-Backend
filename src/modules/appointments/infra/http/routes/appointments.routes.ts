import 'reflect-metadata';
import { Router } from 'express';
import ensureAtuhenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import 'express-async-errors';
import AppointmentController from '../controllers/AppointmentController';

const appointmentsRouter = Router();
const appointmentController = new AppointmentController();
appointmentsRouter.use(ensureAtuhenticated);

/* appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
}); */

appointmentsRouter.post('/', appointmentController.create);

export default appointmentsRouter;
