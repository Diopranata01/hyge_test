import { NextPage } from "next";
import Image from "next/image";
import hygeLogo from "@/assets/logo/hyge-2023-blue1.svg";
import iconSax from "@/assets/icons/location.svg";
import iconArrowUp from "@/assets/icons/ion_arrow-up.svg";

const Footer = () => {
  return (
    <div className="w-full relative bg-gray-100 box-border py-12 flex flex-row justify-center text-base text-neutral-30 font-plus-jakarta-sans border-t-[1px] border-solid border-gray-200">
      <div className="container flex flex-col items-center justify-between gap-24 px-20">
        <div className="flex flex-row items-start justify-center gap-20">
          <div className="flex-1 flex flex-col gap-9 self-stretch relative leading-[24px]">
            <Image
              className="w-100 h-7"
              alt="Logo"
              src={hygeLogo}
              width="100"
              height="28"
            />
            <div className="leading-24">
              Hyge is a Singapore based company that provides customisation and
              specialisation in website design, development, as well as mobile
              app development.
            </div>
            <div className="flex items-center gap-4">
              <Image
                className="w-6 h-6"
                alt="Location Icon"
                src={iconSax}
                width="24"
                height="24"
              />
              <div>North Point Bizhub, Singapore.</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-8">
            <div className="flex  flex-col items-start gap-4">
              <div className="font-semibold">Email Us:</div>
              <div className="leading-160 font-semibold">
                michael@hygeworks.com
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="font-semibold">Contact Us:</div>
              <div className="leading-160 font-semibold">+65 8533 3575</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex items-center gap-4 justify-between">
              <div className="font-semibold">LinkedIn</div>
              <Image
                className="w-28.3 h-28.3"
                alt="LinkedIn Icon"
                src={iconArrowUp}
              />
            </div>
            <div className="h-px border border-solid border-neutral-1" />
            <div className="flex items-center gap-4 justify-between">
              <div className="font-semibold">Instagram</div>
              <Image
                className="w-28.3 h-28.3"
                alt="Instagram Icon"
                src={iconArrowUp}
              />
            </div>
            <div className="h-px border border-solid border-neutral-1" />
            <div className="flex items-center gap-4 justify-between">
              <div className="font-semibold">Behance</div>
              <Image
                className="w-28.3 h-28.3"
                alt="Behance Icon"
                src={iconArrowUp}
              />
            </div>
          </div>
        </div>
        <div className="w-full relative flex flex-row items-start justify-between text-left text-xs text-neutral-30 font-plus-jakarta-sans ">
          <div className="text-xs">
            <div>Copyright © 2023 Hyge, Pte. Ltd.</div>
          </div>
          <div className="text-xs">
            <div>All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
