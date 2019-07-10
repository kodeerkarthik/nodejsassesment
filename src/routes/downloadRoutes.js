import { addNewUser, getUsers, getUser, updateUser, deleteUser } 

from '../controllers/downloadController'
 
const routes = (app) => {
    app.route('/assesment')
        .get(getUsers)
        // .post(addNewUser)
 
    app.route('/assement/:id')
        .get(getUser)
        .put(updateUser)
        .delete(deleteUser)
    

          const { check, validationResult } = require('express-validator');

          app.post('/assesment', [
            check('Email').isEmail(),
            check('Password').isLength({ min: 5, max:8, })
          ], (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(422).json({ errors: errors.array() });
            }
            app.post(addNewUser)
            // User.create({
            //   Email: req.body.Email,
            //   Password: req.body.Password
            // }).then(User => res.json(User));
          });
           




}



export default routes;

