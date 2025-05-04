import React, { useState } from "react";
import { uploadImageToCloudinary } from "../services/cloudinary";

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const result = await uploadImageToCloudinary(file);
      setImageUrl(result.secure_url);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {loading && <p>Đang tải lên...</p>}
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />
      )}
    </div>
  );
};

export default ImageUploader;
