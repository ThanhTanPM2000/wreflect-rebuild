import Pica from 'pica';

export const resizeFile = async (
  file: File,
  maxWidth = 1280,
  maxHeight = 720
): Promise<File | null> => {
  const pica = new Pica();
  const imageBitmap = await createImageBitmap(file);

  // Enforce 16:9 aspect ratio
  const targetAspectRatio = 16 / 9;

  let srcWidth = imageBitmap.width;
  let srcHeight = imageBitmap.height;

  const originalAspectRatio = srcWidth / srcHeight;

  let cropWidth, cropHeight, offsetX, offsetY;

  if (originalAspectRatio > targetAspectRatio) {
    // Wider than 16:9, crop the sides
    cropHeight = srcHeight;
    cropWidth = Math.round(cropHeight * targetAspectRatio);
    offsetX = Math.round((srcWidth - cropWidth) / 2);
    offsetY = 0;
  } else {
    // Taller or equal to 16:9, crop the top and bottom
    cropWidth = srcWidth;
    cropHeight = Math.round(cropWidth / targetAspectRatio);
    offsetX = 0;
    offsetY = Math.round((srcHeight - cropHeight) / 2);
  }

  // Create a higher-resolution intermediate canvas
  const intermediateWidth = maxWidth * 2; // Double the target width
  const intermediateHeight = maxHeight * 2; // Double the target height

  const intermediateCanvas = document.createElement('canvas');
  intermediateCanvas.width = intermediateWidth;
  intermediateCanvas.height = intermediateHeight;

  const ctx = intermediateCanvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(
      imageBitmap,
      offsetX,
      offsetY,
      cropWidth,
      cropHeight, // Source cropping
      0,
      0,
      intermediateWidth,
      intermediateHeight // Intermediate drawing
    );
  }

  // Resize using Pica to the final size
  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = maxWidth;
  outputCanvas.height = maxHeight;

  await pica.resize(intermediateCanvas, outputCanvas);

  // Use highest quality setting in pica.toBlob
  const blob = await pica.toBlob(outputCanvas, 'image/jpeg', 1.0); // Maximum quality

  return new File([blob], file.name, { type: 'image/jpeg' });
};
