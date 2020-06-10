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
}

export default new ExpenseController();