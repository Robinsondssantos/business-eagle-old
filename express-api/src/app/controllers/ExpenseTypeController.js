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
        .json({ errorCode: '003', errorMessage: err.message });
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

  async update(req, res) {
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
    
    let expenseType = null;

    try {
      expenseType = await ExpenseType.findOne({
        where: {
          id: req.params.expenseTypeId,
        }
      })
    } catch(err) {
      console.log(err);
      return res.status(500).json({ errorCode: '003', errorMessage: err.message });            
    }

    const {
      description,
    } = req.body;

    let updatedExpensetype = null;

    try {
      updatedExpensetype = await expenseType.update({
        description,
      });
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });                  
    }

    return res.json(updatedExpensetype);
  }

  async delete(req, res) {
    try {
      return res.json(await ExpenseType.destroy({
        where: {
          id: req.params.expenseTypeId
        }
      }));
    } catch(err) {
      console.log(err)
      return res.status(400)
      .json({ errorCode: '003', errorMessage: err.message });   
    }
  }  
}

export default new ExpenseTypeController();

