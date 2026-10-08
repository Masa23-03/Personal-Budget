const envelopes = [];
let id = 1;
let totalBudget = 0;
const createEnvelope = (name, monthlyLimit, balance) => {
  return {
    id: id++,
    name,
    monthlyLimit,
    balance,
  };
};
//monthly limit and balance: positive number
const seedData = () => {
  envelopes.push(createEnvelope("Rent", 1200, 1200));
  envelopes.push(createEnvelope("Groceries", 500, 500));
  envelopes.push(createEnvelope("Transportation", 600, 600));
  envelopes.push(createEnvelope("Savings", 400, 400));
};
seedData();
const validateNumber = (num, errorMessage) => {
  if (typeof num !== "number" && typeof num !== "string") {
    throw new Error(errorMessage);
  }

  if (typeof num === "string" && num.trim() === "")
    throw new Error(errorMessage);

  const convertedNumber = Number(num);

  if (!Number.isFinite(convertedNumber) || convertedNumber < 0)
    throw new Error(errorMessage);
  return convertedNumber;
};
const validateEnvelope = (instance) => {
  //   instance.name = instance.name || "";
  if (typeof instance.name !== "string" || instance.name.trim() === "")
    throw new Error("Envelope name must be a non-empty string");
  const limitErrorMessage = "Invalid Monthly limit";
  const balanceErrorMessage = "Invalid Balance";
  instance.monthlyLimit = validateNumber(
    instance.monthlyLimit,
    limitErrorMessage,
  );
  if (instance.monthlyLimit === 0) throw new Error(limitErrorMessage);
  instance.balance = validateNumber(instance.balance, balanceErrorMessage);
  if (instance.balance > instance.monthlyLimit)
    throw new Error("Balance cannot exceed monthly limit");
  return instance;
};
const getAllFromDB = () => {
  return envelopes;
};
const getOneFromDB = (id) => {
  const elementIndex = envelopes.findIndex((element) => element.id === id);
  if (elementIndex === -1) return null;
  return envelopes[elementIndex];
};
const addBudget = (budget) => {
  if (budget <= 0) throw new Error("Budget Should be > 0");
  totalBudget = budget;
  return totalBudget;
};
const getAllocatedBudget = () => {
  return envelopes.reduce((total, envelope) => {
    return total + envelope.monthlyLimit;
  }, 0);
};
const getRemainingBudget = () => {
  return totalBudget - getAllocatedBudget();
};
module.exports = {
  getAllFromDB,
  getOneFromDB,
};
