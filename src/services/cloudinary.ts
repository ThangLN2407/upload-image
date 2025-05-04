export const uploadImageToCloudinary = async (file: File) => {

  const cloudName = import.meta.env.VITE_CLOUD_NAME; // Replace with your Cloudinary cloud name
  const uploadPreset = import.meta.env.VITE_CLOUD_PRESETS_NAME; // Replace with your Cloudinary upload preset
  const apiUrl = import.meta.env.VITE_CLOUD_API_URL; // Replace with your Cloudinary API URL

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset); 
  formData.append("cloud_name", cloudName ); 
  formData.append("folder", "upload/images"); 

  try {
    const response = await fetch(
      `${apiUrl}/${cloudName}/image/upload`, // Replace with your cloud name
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    console.log("🚀 ~ uploadImageToCloudinary ~ data:", data)
    return data.secure_url; // Return the URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}