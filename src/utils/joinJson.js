export const joinJson = async (string) => {
  //Split lines
  let jsonObject = {};
  const lines = string.split("\n");
  const firstLine = lines[0].split(",");
  jsonObject = {
    file: firstLine[0],
    lines: [],
  };

  if (firstLine[0].indexOf(".csv") !== -1) {
    lines.map((line) => {
      const partsOfTheLine = line.split(",");
      if (
        partsOfTheLine[1] !== undefined &&
        partsOfTheLine[1].length > 0 &&
        partsOfTheLine[2] !== undefined &&
        partsOfTheLine[2].length > 0 &&
        partsOfTheLine[3] !== undefined &&
        partsOfTheLine[3].length > 0
      ) {
        const jsonToPush = {
          text: partsOfTheLine[1],
          number: partsOfTheLine[2],
          hex: partsOfTheLine[3],
        };
        jsonObject.lines.push(jsonToPush);
      }
    });
    return jsonObject;
  }
};
