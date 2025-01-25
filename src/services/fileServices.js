const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = __dirname + fileObject.name;

  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      path: "link-image",
      err: null,
    };
  } catch (err) {
    return {
      status: "failed",
      path: "null",
      err: JSON.stringify(err),
    };
  }
};

const uploadMultipleFiles = () => {
  // Your code here
};

module.exports = { uploadSingleFile, uploadMultipleFiles };
