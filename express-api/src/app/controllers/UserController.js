import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      first_name: Yup.string()
        .max(50)
        .required(),
      last_name: Yup.string()
        .max(50)
        .required(),
      phone: Yup.string()
        .max(14)
        .matches(/^[0-9]+$/)
        .required(),
      email: Yup.string()
        .email()
        .max(50)
        .required(),
      password: Yup.string()
        .min(6)
        .max(30)
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      // TODO: Need improve the error message
      return res.status(400)
        .json({ errorCode: '003', errorMessage: 'Validation fails' });
    }

    const { email } = req.body;

    let userExists = null;

    try {
      userExists = await User.findOne({
        where: { email }
      });
    } catch (err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '004', errorMessage: 'Something wrong1' });
    }

    if (userExists) {
      return res.status(400)
        .json({ errorCode: '005', errorMessage: 'User already exists' });
    }

    let newUser = null;

    try {
      newUser = await User.create(req.body);
    } catch (err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }

    return res.json(newUser);
  }
}

export default new UserController();