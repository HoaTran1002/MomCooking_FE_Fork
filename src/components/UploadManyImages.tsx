// import { useAlertMessage } from "@/contexts/AlertContext";
import React, { useState, useRef } from "react";

const UploadManyImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // const {addAlert} = useAlertMessage()
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const validImageFiles = Array.from(files).filter((file) => {
        return file.type.startsWith("image/");
      });

      handleFiles(validImageFiles);
    }
  };

  const handleFiles = (files: File[]) => {
    const imagePromises = files.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            const imageUrl = event.target.result as string;
            resolve(imageUrl);
          }
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((imageUrls) => {
      setImages((prevImages) => [...prevImages, ...imageUrls]);
    });
  };

  const handleOpenFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleDeleteImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleOpenFileDialog}
        className="w-max px-6 py-5 overflow-hidden bg-[#bd57ff]/20 rounded-xl border border-dashed border-[#bd57ff] cursor-pointer"
      >
        <div className="flex gap-2">
          <span className="text-[#bd57ff] text-5xl">
            <i className="ri-upload-cloud-2-line"></i>
          </span>
          <p className="flex flex-col gap-2 items-start">
            <span className="text-lg font-medium">
              Drag and drop images here or click to select
            </span>
            <span className="text-[#666666] text-base">JPG,JPEG,PNG</span>
          </p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          multiple
          onChange={handleFileInputChange}
        />
      </div>
      <div className="flex gap-3 mt-2  flex-wrap">
        {images.map((imageUrl, index) => (
          <div className="w-[130px] group h-[130px] p-1 rounded-lg relative overflow-hidden cursor-pointer">
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute invisible transition-all group-hover:visible w-full h-full bg-[#000000]/40 top-0 left-0 flex items-center justify-center">
              <span
                className=" rounded-full p-3 bg-red-500 text-white w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
                onClick={() => handleDeleteImage(index)}
              >
                <i className="ri-delete-bin-7-line"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UploadManyImages;
