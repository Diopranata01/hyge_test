import Image from "next/image";

type PortofolioCard = {
  src: string;
};

export const PortofolioCard = ({ src }: PortofolioCard) => {
  return (
    <>
      <div className="w-auto relative rounded-2xl [background:linear-gradient(141.07deg,_rgba(57,_116,_220,_0),_rgba(2,_107,_236,_0.1)_37.58%,_rgba(9,_110,_177,_0.1)_74.56%,_rgba(31,_164,_217,_0.1)),_linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(255,_255,_255,_0.05))] box-border flex flex-col items-start justify-start p-2 gap-[24px] text-left text-xs text-secondary-40 font-plus-jakarta-sans border-[0.5px] border-solid border-gray">
        <Image
          className="w-full relative self-stretch rounded-lg overflow-hidden shrink-0 object-cover"
          alt=""
          src={src}
          width={300}
          height={200}
        />
        <div className="self-stretch rounded-lg [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(255,_255,_255,_0.05))] flex flex-col items-start justify-start p-4 gap-[16px] border-[1px] border-solid border-gray">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
            <div className="rounded-31xl [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(255,_255,_255,_0.1))] flex flex-col items-center justify-center py-[9px] px-5 gap-[26.5px] border-[0.5px] border-solid border-deepskyblue">
              <div className="relative leading-[150%] text-transparent !bg-clip-text [background:linear-gradient(90.56deg,_#3974dc,_#096eb1_36.54%,_#026bec_66.23%,_#1fa4d9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Web Development
              </div>
              <div className="w-[60px] relative box-border h-[5px] hidden border-t-[5px] border-solid border-info-main" />
            </div>
            <div className="rounded-31xl [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(255,_255,_255,_0.1))] flex flex-col items-center justify-center py-[9px] px-5 gap-[26.5px] border-[0.5px] border-solid border-deepskyblue">
              <div className="relative leading-[150%] text-transparent !bg-clip-text [background:linear-gradient(90.56deg,_#3974dc,_#096eb1_36.54%,_#026bec_66.23%,_#1fa4d9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                UI Design
              </div>
              <div className="w-[60px] relative box-border h-[5px] hidden border-t-[5px] border-solid border-info-main" />
            </div>
          </div>
          <div className="self-stretch relative text-[20px] leading-[32px] font-semibold">
            Levare Decanter
          </div>
          <div className="self-stretch relative text-[16px] leading-[24px] text-neutral-30 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Through our website, we aim to share the joy of authentic wine
            enjoyment by offering innovative products that enhance the tasting
            experience, provide valuable resources and knowledge, and foster a
            vibrant community of wine lovers.
          </div>
        </div>
      </div>
    </>
  );
};
