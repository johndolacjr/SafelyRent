const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tenantRoutes = require('./tenantRoutes');

router.use('/users', userRoutes);
router.use('/tenants', tenantRoutes);

module.exports = router;