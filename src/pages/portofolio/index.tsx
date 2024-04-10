import { buttonTexts } from "@/utils/buttonTexts";
import frame299 from "@/assets/images/Frame 299.png";
import frame399 from "@/assets/images/Frame 399.png";
import hayumi from "@/assets/images/Hayumi.png";
import united from "@/assets/images/United.png";
import airple from "@/assets/images/Airple.png";
import levare from "@/assets/logo/Frame 304.png";
import shilindo from "@/assets/logo/Frame 306.png";
import aires from "@/assets/logo/Frame 303.png";
import apix from "@/assets/logo/Frame 313.png";
import airpleLogo from "@/assets/logo/Frame 302.png";
import sinarAbadi from "@/assets/logo/Frame 301.png";
import unitedLogo from "@/assets/logo/Logo United Rope 1.png";
import dymos from "@/assets/logo/Frame 311.png";
import pelita from "@/assets/logo/Frame 335.png";
import elektrika from "@/assets/logo/Frame 307.png";
import hayumiLogo from "@/assets/logo/Frame 308.png";
import relita from "@/assets/logo/Frame 309.png";
import asiasinar from "@/assets/logo/Frame 310.png";
import airpleLogo2 from "@/assets/logo/Frame 315.png";
import Image from "next/image";
import { PortofolioCard } from "@/components/common/cards/PortofolioCard";
import NavbarButton from "@/components/common/buttons/NavbarButton";

type LogoProps = {
  src: string;
  height: number;
  width: number;
};

const Header = () => {
  return (
    <>
      <div className="w-3/4 relative flex flex-col items-start justify-center gap-[42px]">
        <b className="w-[327px] relative text-[48px] tracking-[2px] leading-[64px] inline-block text-left text-lavender">
          <span className="text-white">Our</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(90.56deg,_#1fa4d9,_#096eb1_37.06%,_#026bec_71.88%,_#3974dc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            {" "}
            Portfolio
          </span>
        </b>
        <div className="w-3/4 relative text-[20px] leading-[160%] text-neutral-30 text-left flex items-center">
          As your digital partner, we collaborate with you to drive innovation,
          stay ahead of the curve, and deliver real impact for your business.
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px]">
          {buttonTexts.map((text, index) => (
            <>
              <div
                className={`rounded-31xl ${
                  index === 0 ? "bg-primary-50 border-0" : "bg-whitesmoke"
                } flex flex-col items-center justify-center py-[9px] px-5 gap-[26.5px] border-[0.5px] border-solid border-gray`}
              >
                <div className="relative leading-[150%]">{text}</div>
                <div className="w-[60px] relative box-border h-[5px] hidden border-t-[5px] border-solid border-info-main" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className="flex flex-col grid grid-cols-2 gap-4 py-4">
        <PortofolioCard src={frame299.src} />
        <PortofolioCard src={frame399.src} />
        <PortofolioCard src={hayumi.src} />
        <PortofolioCard src={united.src} />
        <PortofolioCard src={airple.src} />
        <PortofolioCard src={frame299.src} />
        <PortofolioCard src={frame299.src} />
        <PortofolioCard src={frame299.src} />
      </div>
      <div className="flex flex-row justify-start my-4 border-b-[1px] pb-[100px]">
        <div className="relative rounded-[50px] bg-whitesmoke flex flex-col items-center justify-center py-[4px] px-[10px] text-left text-[12px] text-shades-0">
          <NavbarButton text="Load More" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start border-b-[1px] ">
        <div className="flex flex-col items-start justify-start gap-[52px]">
          {/* Text */}
          <div className="flex flex-col items-start gap-4">
            <b className="w-[281px] relative text-[48px] tracking-[2px] leading-[64px] inline-block font-plus-jakarta-sans text-left text-lavender">
              <span>Our</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90.56deg,_#1fa4d9,_#096eb1_37.06%,_#026bec_71.88%,_#3974dc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                {" "}
                Clients
              </span>
            </b>
            <div className="w-[586px] relative text-[20px] leading-[160%] font-plus-jakarta-sans text-neutral-30 text-left inline-block">
              Here are just few of the clients we’ve had the privilege to serve:
            </div>
          </div>
          {/* Logo */}
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-start justify-start gap-4">
              <CustomerLogo src={levare.src} height={68.3} width={137.5} />
              <CustomerLogo src={shilindo.src} height={46.3} width={89.5} />
              <CustomerLogo src={aires.src} height={36.3} width={91.5} />
              <CustomerLogo src={apix.src} height={48} width={66.2} />
              <CustomerLogo src={airpleLogo.src} height={48} width={99.2} />
              <CustomerLogo src={sinarAbadi.src} height={48} width={165} />
            </div>
            <div className="flex flex-row items-start justify-start gap-4">
              <CustomerLogo src={unitedLogo.src} height={48} width={37.6} />
              <CustomerLogo src={dymos.src} height={36.3} width={66.2} />
              <CustomerLogo src={pelita.src} height={36.3} width={37} />
              <CustomerLogo src={elektrika.src} height={48} width={64.2} />
              <CustomerLogo src={hayumiLogo.src} height={37.6} width={106} />
              <CustomerLogo src={relita.src} height={48} width={151} />
              <CustomerLogo src={asiasinar.src} height={48} width={32.4} />
              <CustomerLogo src={airpleLogo2.src} height={48} width={99.2} />
            </div>
          </div>
          {/* Text */}

          <div className="w-full flex flex-col pt-[110px] relative rounded-[500px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0)_90%,_rgba(255,_255,_255,_0.05))] shadow-[78px_82px_98px_rgba(9,_110,_177,_0.8)] h-[1780px]">
            <div className="w-full mt-[10px] relative rounded-[500px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0)_90%,_rgba(255,_255,_255,_0.05))] shadow-[-39px_82px_78px_rgba(57,_116,_220,_0.8)] h-[1628px]">
              <div className="relative w-full pt-[10px] flex flex-col items-center justify-center text-center text-29xl text-lavender font-plus-jakarta-sans">
                <>
                  <b className="relative leading-[64px] text-[48px]">
                    We can help to improve your business
                  </b>
                  <b className="relative leading-[64px] text-[48px] text-transparent !bg-clip-text [background:linear-gradient(90.56deg,_#1fa4d9,_#096eb1_37.06%,_#026bec_71.88%,_#3974dc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    by upgrading your technology!
                  </b>
                </>
                <div className="w-[330px] relative text-[20px] leading-[160%] pt-[42px] font-plus-jakarta-sans text-neutral-30 text-center inline-block">
                  Schedule a free 30 mins call with us
                </div>
              </div>
              <div className="w-full mt-[70px] relative rounded-[500px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0)_90%,_rgba(255,_255,_255,_0.05))] shadow-[0px_20px_107px_rgba(2,_107,_236,_0.8)] h-[1461px]">
                <div className="flex w-auto mb-10 border-[1px] justify-center">
                  <div className="w-auto relative rounded-[50px] bg-primary-50 flex flex-col items-center justify-center py-[4px] px-[10px] text-left text-[12px] text-shades-0">
                    <NavbarButton text="Book an appointment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CustomerLogo = ({ src, height, width }: LogoProps) => {
  return (
    <>
      <div className="relative rounded-2xl [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(255,_255,_255,_0.05))] box-border w-full h-[68.3px] flex flex-col items-center justify-center p-4 border-[1px] border-solid border-gray">
        <Image
          className={`w-[${width}px] relative h-[${height}px] object-cover`}
          alt=""
          src={src}
          height={height}
          width={width}
        />
      </div>
    </>
  );
};

export const Portofolio = () => {
  return (
    <>
      <Header />
      <div className="w-3/4 relative flex flex-col gap-6">
        <Content />
      </div>
    </>
  );
};
