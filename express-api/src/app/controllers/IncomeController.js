import * as Yup from 'yup';
import Income from '../models/Income';

class IncomeController {
  async index(req, res) {
    try {
      return res.json(await Income.findAll());
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
      received_in: Yup.date()
        .required('received_in is required'),
      date_to_receive: Yup.date()
        .required('date_to_receive is required'),
      type_id: Yup.number().required('type_id is required'),
      customer_id: Yup.number().required('customer_id is required'),
      description: Yup.string()
        .max(50)
        .required('description is required'),
    });

    try {
      await schema.validate(req.body);
    } catch(err) {
      return res.status(400)
        .json({ errorCode: '003', errorMessage: err.errorMessage });
    }

    const {
      description,
      customer_id,
      type_id,
      date_to_receive,
      received_in,
      value
    } = req.body;

    try {
      const newIncome = await Income.create({
        description,
        customer_id,
        type_id,
        date_to_receive,
        received_in,
        value
      });
      return res.json(newIncome);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }
}

export default new IncomeController();