import React, { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customProp?: string;
  className?: string;
  beforeIcon?: JSX.Element;
  afterIcon?: JSX.Element;
  isLoading?: boolean
}

// Tạo hàm hoặc class cho CustomButton
const Button: React.FC<CustomButtonProps> = ({ isLoading, beforeIcon, afterIcon, className, customProp, ...props }) => {

  return (
    isLoading ? (
      <button {...props} className={`py-2 px-5 rounded ${className} `} disabled  >
        <span className='animate-spin inline-block mr-2'>
          <i className="ri-loader-4-line text-base"></i>
        </span>
        <span>
          Đang thực thi
        </span>
      </button>
    ) : (
      <button {...props} className={`py-2 px-5 rounded ${className}`} >
        <span>
          {beforeIcon}
        </span>
        {customProp} {props.children}
        <span>
          {afterIcon}
        </span>
      </button>
    )
  )
};

export default Button;
