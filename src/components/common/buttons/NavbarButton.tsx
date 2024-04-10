interface NavbarButtonProps {
  text: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ text }) => {
  return (
    <div className="rounded-31xl flex flex-col items-center justify-center py-[9px] px-5 text-shades-0">
      <div className="relative leading-[150%]">{text}</div>
      <div className="w-[60px] relative box-border h-[5px] hidden border-t-[5px] border-solid border-info-main" />
    </div>
  );
};

export default NavbarButton;
