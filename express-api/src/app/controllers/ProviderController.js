import * as Yup from 'yup';
import Provider from '../models/Provider';

class ProviderController {
  async index(req, res) {
    try {
      return res.json(await Provider.findAll());
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
      const newProvider = await Provider.create({
        name,
      });
      return res.json(newProvider);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: '006', errorMessage: 'Something wrong' });
    }
  }

  async delete(req, res) {
    try {
      return res.json(await Provider.destroy({
        where: {
          id: req.params.providerId
        }
      }));
    } catch(err) {
      console.log(err)
      return res.status(400)
        .json({ errorCode: '003', errorMessage: err.message });   
    }
  }
}

export default new ProviderController();