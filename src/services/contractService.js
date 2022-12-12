const { Op }  = require('sequelize');

const getContracts = async (req) => {
  const { Contract } = req.app.get('models');
  const {id} = req.profile;

  const contracts = await Contract.findAll({
    where: {
      [Op.or]: [{ ContractorId: id }, { ClientId: id }],
      status: {
        [Op.ne]: 'terminated',
      },
    },
  });
  return contracts;
};

const getContractById = async (req) => {
    const {Contract} = req.app.get('models');
    const {id} = req.params;
    const contract = await Contract.findOne({where:{ id, [Op.or]: [{ContractorId: id}, { ClientId: id}]}});
    return contract;
}



module.exports = { getContractById, getContracts };
