import Income from '../models/Income';

class IncomeController {
  async index(req, res) {
    try {
      return res.json(await Income.findAll());
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Somethign wrong' });
    }
  }
}

export default new IncomeController();