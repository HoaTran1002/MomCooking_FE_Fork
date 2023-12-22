import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import Pagetitle from "@/components/PageTitle";
import view1 from "@/assets/images/Views/z4689941090686_42737766a48d0c06d3a6cd0b45158aeb.jpg";
import Input from "@/components/Input";
import { useTranslation } from "react-i18next";
import SubFooter from "@/components/layouts/Client/Footer/subFooter";
const ContactUs = (): JSX.Element => {
  const {t} = useTranslation("contact")
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <>
        <Pagetitle title="Liên hệ chúng tôi" />
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>{t('titleContact')}</span>
            <span className="text-base px-24">
              {t('sloganContact')}
            </span>
          </div>
          <div
            style={{
              backgroundImage: `url(${view1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="bg-[#f7f7f7] py-16">
          <div className="flex flex-col gap-20 items-center justify-center w-full">
            <div className="w-5/6 h-[70vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.95767753746907!2d106.68398696398052!3d10.7865669572312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2c5b2c6623%3A0xa4d25d0b0dae8748!2zMTQ4LzEwIEzDvSBDaMOtbmggVGjhuq9uZywgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1695823542768!5m2!1svi!2s"
                style={{ border: 0 }}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-5/6">
              <h2 className="uppercase text-2xl tracking-widest text-center">
                {t('titleFieldType')}
              </h2>
              <div className="flex flex-col w-full gap-4">
                <Input placeholder={t('placeholderName')} labelName={t('name')} type="text" />
                <Input
                  placeholder={t('placeholderEmail')}
                  labelName="Email"
                  type="email"
                />
                <Input
                  placeholder={t('placeholderMessage')}
                  labelName={t('message')}
                  type="text-area"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="p-3 hover:bg-black hover:text-white transition-all uppercase tracking-widest text-lg cursor-pointer ">
                  {t('submitButton')}
                </div>
              </div>
            </div>
          </div>
          <SubFooter/>
        </div>
      </>
    </LayoutMain>
  );
};
export default ContactUs;
