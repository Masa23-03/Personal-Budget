const app = require("./app");
const port = Number(process.env.PORT) || 4001;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
