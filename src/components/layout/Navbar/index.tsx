import Image from 'next/image';
import {buttonNavbarTexts} from "@/utils/buttonTexts";
import NavbarButton from "@/components/common/buttons/NavbarButton";
import hygeLogo from '@/assets/logo/hyge-2023-blue1.svg';

export const Navbar = () => {
  return (
    <div className="w-full relative box-border h-20 flex flex-row items-center justify-between py-6 px-20 text-left text-xs text-shades-0 font-plus-jakarta-sans border-[1px] ">
      <Image
        className="w-[100px] relative h-[27.4px] overflow-hidden shrink-0"
        alt=""
        src={hygeLogo}
        width="100"
        height="100"
      />
      <div className="rounded-[96px] bg-navbar [backdrop-filter:blur(24px)] flex flex-row items-center justify-end p-1">
        {/* Map through the array of button texts */}
        {buttonNavbarTexts.map((text, index) => (
          <NavbarButton key={index} text={text} />
        ))}
        <div className="w-[102px] rounded-[10px] h-[80.5px] hidden" />
      </div>
      <div className="rounded-[106px] bg-dimgray overflow-hidden flex flex-row items-center justify-start py-[13px] px-5 relative opacity-[0.56] text-primary-surface">
        <div className="w-[50px] absolute !m-[0] top-[calc(50%-_25px)] left-[calc(50%-_157px)] rounded-[50%] bg-primary-50 h-[50px] opacity-[0] z-[0]" />
        <div className="relative leading-[150%] z-[1]">Let’s Talk</div>
      </div>
    </div>
  );
};
