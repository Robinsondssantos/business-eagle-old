import * as Yup from 'yup';
import Expense from '../models/Expense';

class ExpenseController {
  async index(req, res) {
      try {
        return res.json(await Expense.findAll());
      } catch(err) {
        console.log(err);
        return res.status(500)
          .json({ errorCode: '006', errorMessage: 'Something wrong' });
      }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      // status
      value: Yup.number().required('value is required'),
      paid_in: Yup.date()
        .required('paid_in is required'),
      date_to_pay: Yup.date()
        .required('date_to_pay is required'),
      type_id: Yup.number().required('type_id is required'),
      provider_id: Yup.number().required('provider_id is required'),
      description: Yup.string()
        .max(50)
        .required('description is required'),
    });

    try {
      await schema.validate(req.body);
    } catch(err) {
      return res.status(400)
        .json({ errorCode: '003', errorMessage: err.message });
    }

    const { 
      description, 
      provider_id, 
      type_id, 
      date_to_pay,
      paid_in,
      value 
    } = req.body;

    try {
      const newExpense = await Expense.create({
        description,
        provider_id,
        type_id,
        date_to_pay,
        paid_in,
        value
      });
      return res.json(newExpense);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }
}

export default new ExpenseController();