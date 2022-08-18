const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(1234, () => {
    console.log("listening at 1234");
  });
});
