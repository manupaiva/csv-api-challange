import { getDataFromUrl } from "../utils/getdata.js";
import { joinJson } from "../utils/joinJson.js";

export const getFiles = async (req, res) => {
  try {
    const url = "https://echo-serv.tbxnet.com/v1/secret/files/";
    let result = await getDataFromUrl(url);
    const files = JSON.parse(result).files;

    const response = await Promise.all(
      files.map(async (csvFilename) => {
        let result = await getDataFromUrl(
          `https://echo-serv.tbxnet.com/v1/secret/file/${csvFilename}`
        );
        return joinJson(result.substring(21));
      })
    );

    function compareFiles(a, b) {
      const fileNumberA = parseInt(a.file.replace(/\D/g, ""));
      const fileNumberB = parseInt(b.file.replace(/\D/g, ""));

      return fileNumberA
        .toString()
        .localeCompare(fileNumberB.toString(), "en", { numeric: true });
    }
    response.sort(compareFiles);

    let finalJson = {
      response: response,
    };

    var cleanResponse = finalJson.response.filter(function (item) {
      return (
        item !== null && item !== undefined && Object.keys(item).length > 0
      );
    });
    res.status(200).json(cleanResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFilesList = async (req, res) => {
  try {
    const url = "https://echo-serv.tbxnet.com/v1/secret/files/";
    let result = await getDataFromUrl(url);
    const files = JSON.parse(result).files;
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFile = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await getDataFromUrl(
      `https://echo-serv.tbxnet.com/v1/secret/file/test${id}.csv`
    );
    if (result.includes("Not Found")) {
      res.status(404).json(JSON.parse(result));
    }
    let response = await joinJson(result.substring(21));
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
