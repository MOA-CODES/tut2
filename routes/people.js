const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/people');
  
 //1ST FLAVOUR OF SETTING UP ROUTES
// router.get('/', peopleController.getPeople)

// router.post('/', peopleController.createPerson )

// router.post('/postman', peopleController.createPersonPostman )

// router.put('/:id', peopleController.UpdatePerson )

// router.delete('/:id', peopleController.DeletePerson )

//second flavour - chaining
router.route('/').get(peopleController.getPeople).post(peopleController.createPerson)
router.route('/postman').post(peopleController.createPersonPostman)
router.route('/:id').put(peopleController.UpdatePerson).delete(peopleController.DeletePerson)

module.exports = router