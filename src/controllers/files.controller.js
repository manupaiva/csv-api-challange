import { getDataFromUrl } from "../utils/getdata.js";
import { joinJson } from "../utils/joinJson.js";
import { compareFiles, cleanFile } from "../utils/compareFiles.js";

export const getFiles = async (req, res) => {
  try {
    const url = "https://echo-serv.tbxnet.com/v1/secret/files/";
    const result = await getDataFromUrl(url);

    // Get all files name
    const files = JSON.parse(result).files;

    // Promise resolved with all files GET call
    const response = await Promise.all(
      files.map(async (csvFilename) => {
        const result = await getDataFromUrl(
          `https://echo-serv.tbxnet.com/v1/secret/file/${csvFilename}`
        );
        return joinJson(result.substring(21));
      })
    );

    // function to sort json response. (get ordered data)
    response.sort(compareFiles);
    const finalJson = { response };

    // function to clean json response. (get ordered and clean data)
    const cleanResponse = cleanFile(finalJson);

    res.status(200).json(cleanResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFilesList = async (req, res) => {
  try {
    const url = "https://echo-serv.tbxnet.com/v1/secret/files/";
    const response = await getDataFromUrl(url);
    if (response === undefined) {
      res.status(404).json(JSON.parse(response));
    }
    const files = JSON.parse(response).files;
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFile = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getDataFromUrl(
      `https://echo-serv.tbxnet.com/v1/secret/file/test${id}.csv`
    );
    const response = await joinJson(result.substring(21));
    response !== undefined
      ? res.status(200).json(response)
      : res.status(404).json(JSON.parse(result));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
