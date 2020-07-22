module.exports = {
    up: queryInterface => {
      const currentDate = new Date();
      return queryInterface.bulkInsert(
        'users', 
        [
          {
            first_name: 'Robinson',
            last_name: 'D. S. Santos',
            phone: '554632256575',
            email: 'robinsondssantos@gmail.com',
            password_hash: '$2a$08$K1GfNUBZ0Nvo.bp1Jhb60uF7nXJeRGDKrbzHx2hejA.i2MkUl/fIi', // MLHRqLYxPev2zSF8     
            created_at: currentDate,
            updated_at: currentDate,          
          }
        ], 
        {}
      );
    },
  
    down: queryInterface => {
      return queryInterface.bulkDelete('users', null, {});
    }
  };