import HeaderLogo from './HeaderLogo';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <header className="w-full bg-gray-50 shadow-sm ">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-6 px-8">
        <HeaderLogo />
        <HeaderButton />
      </div>
    </header>
  );
};

export default Header;
