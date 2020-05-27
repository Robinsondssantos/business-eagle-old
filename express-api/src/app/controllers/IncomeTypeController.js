import * as Yup from 'yup';
import IncomeType from '../models/IncomeType';

class IncomeTypeController {
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
        .json({ errorCode: '003', errorMessage: err.message });
    }

    try {
      const newIncomeType = await IncomeType.create(req.body);
      return res.json(newIncomeType);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }
}

export default new IncomeTypeController();