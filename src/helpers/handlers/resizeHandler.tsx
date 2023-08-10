import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

export const resizeHanlder = async (uri: string) => {
  try {
    const size = { resize: { width: 300, height: 300 } };
    const resize = await manipulateAsync(uri, [size], {
      compress: 1,
    });
    console.log("img resize");
    console.log(resize);
    return resize;
  } catch (error: any) {
    console.log("ada error check ");
    console.log(error.message);
    console.log(error);
  }
};
