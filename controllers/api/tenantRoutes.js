const router = require('express').Router();
const { Tenant } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTenant = await Tenant.create({
      ...req.body,
      user_id: req.session.user_id,
      name: req.session.name,
      email: req.session.email,
      rating: req.session.rating,
    });

    res.status(200).json(newTenant);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/test', withAuth, async (req,res) => {
  res.render('tenant', {tenant: [{
    tenantName: "Randy",
    tenantUsername: "RandyCoolGuy",
    tenantAddress: "1000 Main St",
    paymentTimlinessScore: 4.5,
    cleanlinessScore: 4.7,
    propertyUpkeepScore: 4,
    communicationScore: 5,
    friendlinessScore: 5,
  }, 

  {
    tenantName: "John",
    tenantUsername: "JohnCoolGuy",
    tenantAddress: "2000 Main St",
    paymentTimlinessScore: 4.5,
    cleanlinessScore: 4.7,
    propertyUpkeepScore: 4,
    communicationScore: 5,
    friendlinessScore: 5,
  }

]})
} )

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
