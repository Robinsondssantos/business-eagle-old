import * as Yup from 'yup';
import Customer from '../models/Customer';

class CustomerController {
  async index(req, res) {
    try {
      return res.json(await Customer.findAll());
    } catch(err) {
      console.log(err)
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .max(50)
        .required('name is required'),
    });

    try {
      await schema.validate(req.body);
    } catch(err) {
      return res.status(400)
        .json({ errorCode: '003', errorMessage: err.message });
    }

    const { name } = req.body;

    try {
      const newCustomer = await Customer.create({
        name,
      });
      return res.json(newCustomer);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .max(50)
        .required('name is required'),
    });

    try {
      await schema.validate(req.body);
    } catch(err) {
      return res.status(400)
        .json({ errorCode: '003', errorMessage: err.message });
    }
    
    let customer = null;

    try {
      customer = await Customer.findOne({
        where: {
          id: req.params.customerId,
        }
      })
    } catch(err) {
      console.log(err)
      return res.status(500).json({ errorCode: '003', errorMessage: err.message });
    }

    const { name } = req.body;

    let updatedCustomer = null;

    try {
      updatedCustomer = await customer.update({
        name,
      })
    } catch(err) {
      console.log(err)
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });      
    }

    return res.json(updatedCustomer);
  }

  async delete(req, res) {
    try {
      return res.json(await Customer.destroy({
        where: {
          id: req.params.customerId
        }
      }));
    } catch(err) {
      console.log(err)
      return res.status(400)
      .json({ errorCode: '003', errorMessage: err.message });   
    }
  }
}

export default new CustomerController();