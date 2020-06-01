import * as Yup from 'yup';
import ExpenseType from '../models/ExpenseType';

class ExpenseTypeController {
  async index(req, res) {
    try {
      return res.json(await ExpenseType.findAll());
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });      
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string()
        .max(50)
        .required('description is required'),
    });

    try {
      await schema.validate(req.body);
    } catch(err) {
      return res.status(400)
        .json({ errorCode: '003', errorMessage: err.message })
    }

    try {
      const newExpenseType = await ExpenseType.create(req.body);
      return res.json(newExpenseType);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }
}

export default new ExpenseTypeController();

