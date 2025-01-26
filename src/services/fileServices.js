const path = require("path"); //fs : file system

const uploadSingleFile = async (fileObject) => {
  // save => public/images/upload (__dirname là đường dẫn tới project BackEnd_NodeJS)
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  //   console.log(">>> check fileObject: ", path.resolve(__dirname, "../public/images/upload"))

  //get image extension (lấy ra extension .png .jpg)
  let extName = path.extname(fileObject.name);

  //get image's name (without extension) (lấy ra tên gốc của ảnh)
  let baseName = path.basename(fileObject.name, extName);

  //create final path: eg: /upload/your-image.png
  let finalName = `${baseName}-${Date.now()}${extName}`; //( nối tên file với thời gian hiện tại)
  let finalPath = `${uploadPath}/${finalName}`; //(nối đường dẫn cần lưu với tên file)

  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.log(">>> check error: ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFiles = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let resultArr = [];
    let countSuccess = 0;
    for (let i = 0; i < filesArr.length; i++) {
      //get image extension (lấy ra extension .png .jpg)
      let extName = path.extname(filesArr[i].name);

      //get image's name (without extension) (lấy ra tên gốc của ảnh)
      let baseName = path.basename(filesArr[i].name, extName);

      //create final path: eg: /upload/your-image.png
      let finalName = `${baseName}-${Date.now()}${extName}`; //( nối tên file với thời gian hiện tại)
      let finalPath = `${uploadPath}/${finalName}`; //(nối đường dẫn cần lưu với tên file)

      try {
        await filesArr[i].mv(finalPath);
        resultArr.push({
          status: "success",
          path: finalName,
          fileName: filesArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (err) {
        resultArr.push({
          status: "failed",
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err),
        });
      }
    }

    return {
      countSuccess: countSuccess,
      detail: resultArr,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
