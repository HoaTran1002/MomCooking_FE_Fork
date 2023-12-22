import React from 'react'
export interface IPropUploadImage {
    children?: JSX.Element,
    imgUrl?: string,
    onFileSelect?: (file: File) => void;
}
const UploadImage = ({ children, imgUrl,onFileSelect }: IPropUploadImage): JSX.Element => {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileName = e.target.files?.[0]?.name;
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
        if (onFileSelect && file) {
            onFileSelect(file);
        }
        console.log('Selected File:', fileName);
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
            <div className='w-full h-[300px] overflow-hidden relative rounded-xl border border-dashed border-[#bd57ff]'  >
                <div className="w-full h-full absolute flex flex-col justify-center items-center text-[#bd57ff] " onClick={handleButtonClick}>
                    <span className='w-16 h-16 rounded-full flex items-center justify-center bg-[#f7ecff] cursor-pointer'>
                        <i className="ri-upload-cloud-line text-4xl"></i>
                    </span>
                    <h2 className='text-lg font-medium text-gray-500'>
                        Nhấn hoặc thả hình ảnh vào để hiển thị
                    </h2>
                </div>
                {children}
                {selectedFile && (
                    <div className='w-full absolute z-10 h-full bg-white'>
                        <img className='w-full h-full object-cover' src={URL.createObjectURL(selectedFile)} />
                        <span onClick={handleButtonClick} className='flex w-11 h-11 items-center justify-center rounded-full bg-[#f7ecff] text-[#bd57ff] absolute right-2 bottom-2 hover:bg-[#bd57ff] hover:text-white transition-all duration-300'>
                            <i className="ri-image-edit-line text-xl cursor-pointer"></i>
                        </span>
                    </div>
                )}

                {imgUrl !== null || selectedFile !== null ? (
                    null
                ) : (
                    <div className='w-full absolute z-10 h-full'>
                        <img className='w-full h-full object-cover' src={imgUrl} />
                        <span onClick={handleButtonClick} className='flex w-11 h-11 items-center justify-center rounded-full bg-[#f7ecff] text-[#bd57ff] absolute right-2 bottom-2 hover:bg-[#bd57ff] hover:text-white transition-all duration-300'>
                            <i className="ri-image-edit-line text-xl cursor-pointer"></i>
                        </span>
                    </div>
                )}
            </div>

        </>
    )
}
export default UploadImage