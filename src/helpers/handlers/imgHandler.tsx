import * as FileSystem from "expo-file-system";

export const imgToUtf8 = async (uri: string) => {
  // generate img to base
  try {
    const data = await FileSystem.readAsStringAsync(uri, {
      encoding: "utf8",
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const imgToBase64 = async (uri: string) => {
  // generate img to base
  try {
    const data = await FileSystem.readAsStringAsync(uri, {
      encoding: "base64",
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export function uriToBlob(uri: string) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // If successful -> return with blob
    xhr.onload = function () {
      resolve(xhr.response);
    };

    // reject on error
    xhr.onerror = function () {
      reject(new Error("uriToBlob failed"));
    };

    // Set the response type to 'blob' - this means the server's response
    // will be accessed as a binary object
    xhr.responseType = "blob";

    // Initialize the request. The third argument set to 'true' denotes
    // that the request is asynchronous
    xhr.open("GET", uri, true);

    // Send the request. The 'null' argument means that no body content is given for the request
    xhr.send(null);
  });
}
