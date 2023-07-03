export const compareFiles = (a, b) => {
  const fileNumberA = parseInt(a.file.replace(/\D/g, ""));
  const fileNumberB = parseInt(b.file.replace(/\D/g, ""));

  return fileNumberA
    .toString()
    .localeCompare(fileNumberB.toString(), "en", { numeric: true });
};

export const cleanFile = (finalJson) => {
  const cleanResponse = finalJson.response.filter(function (item) {
    return item !== null && item !== undefined && Object.keys(item).length > 0;
  });
  return cleanResponse;
};
