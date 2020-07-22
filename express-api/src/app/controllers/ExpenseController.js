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
      status: Yup.number().required('status is required'),
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
      value,
      status 
    } = req.body;

    try {
      const newExpense = await Expense.create({
        description,
        provider_id,
        type_id,
        date_to_pay,
        paid_in,
        value,
        status
      });
      return res.json(newExpense);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      status: Yup.number().required('status is required'),
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
    
    let expense = null;

    try {
      expense = await Expense.findOne({
        where: {
          id: req.params.expenseId,
        }
      })
    } catch(err) {
      console.log(err);
      return res.status(500).json({ errorCode: '003', errorMessage: err.message });
    }

    const { 
      description, 
      provider_id, 
      type_id, 
      date_to_pay,
      paid_in,
      value,
      status 
    } = req.body;

    let updatedExpense = null;

    try {
      updatedExpense = await expense.update({
        description,
        provider_id,
        type_id,
        date_to_pay,
        paid_in,
        value,
        status
      })
    } catch(err) {
      console.log(err)
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });      
    }

    return res.json(updatedExpense);
  }

  async delete(req, res) {
    try {
      return res.json(await Expense.destroy({
        where: {
          id: req.params.expenseId
        }
      }));
    } catch(err) {
      console.log(err)
      return res.status(400)
      .json({ errorCode: '003', errorMessage: err.message });   
    }
  }  
}

export default new ExpenseController();