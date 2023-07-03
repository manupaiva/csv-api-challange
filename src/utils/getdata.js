import https from "https";
export const getDataFromUrl = async (url) => {
  try {
    const token = "aSuperSecretKey";
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let promise = new Promise((resolve, reject) => {
      var data = "";
      https.get(url, options, (res) => {
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(data);
        });
      });
    });

    let result = await promise;

    return result;
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
