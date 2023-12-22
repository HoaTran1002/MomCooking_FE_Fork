import React from 'react'
import dot from "@/assets/images/dot.png";
import Input from '@/components/Input';
import { useTranslation } from "react-i18next";
import Button from '@/components/Buttons';
const SubFooter = ():JSX.Element=>{
    const {t} = useTranslation("layout")
    const [emailType,setEmailType] = React.useState<string>('')

    // =================
    const handleSubmitEmailSubscribe = () =>{
        console.log(emailType);  
    }

    //==================
    return(
        <div className="sm:grid sm:grid-cols-12 max-sm:grid max-sm:grid-cols-2 mt-10">
        <div className="sm:col-span-1 max-sm:hidden ">
          <img src={dot} alt="" className="w-full" />
        </div>
        <div className="bg-zinc-900 sm:col-span-11 max-sm:col-span-2 sm:px-60  max-sm:px-4">
          <h2 className=" relative uppercase tracking-widest text-xl font-medium py-7 text-white">
            {t('subscribe')}
          </h2>
          <span className="text-slate-200 py-3  uppercase tracking-widest text-sm">
            {t('subscribeProvider')}
          </span>
          <div
            className="flex items-center justify-start w-full py-3"
            style={{ gap: "20px" }}
          >
            <Input
              className="w-[400px] sm:text-lg "
              placeholder={t("emailPlaceholder")}
              onChange={(e)=>setEmailType(e.target.value)}
              icon={<i className="ri-mail-open-line"></i>}
            />
            <Button onClick={handleSubmitEmailSubscribe} className="input-button">
              <i className="ri-send-plane-line text-white flex items-center justify-center"></i>
            </Button>
          </div>
        </div>
      </div>
    )
}
export default SubFooter