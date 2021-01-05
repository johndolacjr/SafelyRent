const router = require('express').Router();
const { Tenant } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log("test",req.body);
  try {
    const newTenant = await Tenant.create({
      user_id:req.session.user_id,
      name: req.body.name,
      email: "a", //todo replace with user email
      rating: req.body.tenant_rating,
    }); 
    res.status(200).json(newTenant);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/test', withAuth, async (req, res) => {
//   res.render('tenant', {
//     tenant: [{
//       tenantName: "Randy",
//       tenantUsername: "RandyCoolGuy",
//       tenantAddress: "1000 Main St",
//       paymentTimlinessScore: 4.5,
//       cleanlinessScore: 4.7,
//       propertyUpkeepScore: 4,
//       communicationScore: 5,
//       friendlinessScore: 5,
//     },

//     {
//       tenantName: "John",
//       tenantUsername: "JohnCoolGuy",
//       tenantAddress: "2000 Main St",
//       paymentTimlinessScore: 4.5,
//       cleanlinessScore: 4.7,
//       propertyUpkeepScore: 4,
//       communicationScore: 5,
//       friendlinessScore: 5,
//     }

//     ]
//   })
// })

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tenantData = await Tenant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!tenantData) {
      res.status(404).json({ message: 'No tenant found with this id!' });
      return;
    }

    res.status(200).json(tenantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/pogo-stick", withAuth, async (req, res) => {
//   console.log(req.body);
// })
module.exports = router;
