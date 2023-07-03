import app from "./app.js";

const PORT = 3000;

async function main() {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the server:", error);
  }
}
main();
