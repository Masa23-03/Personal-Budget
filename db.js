const envelopes = [];
let id = 1;

const createEnvelope = (name, monthlyLimit, balance) => {
  return {
    id: id++,
    name,
    monthlyLimit,
    balance,
  };
};
seedData = () => {
  envelopes.push(createEnvelope("Rent", 1200, 1200));
  envelopes.push(createEnvelope("Groceries", 500, 500));
  envelopes.push(createEnvelope("Transportation", 600, 600));
  envelopes.push(createEnvelope("Savings", 400, 400));
};
seedData();
const getAllFromDB = () => {
  return envelopes;
};

module.exports = {
  getAllFromDB,
};
