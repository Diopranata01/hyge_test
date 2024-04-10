import { Navbar } from "./Navbar";
import Footer from "./Footer";

type AppLayout = {
    children: React.ReactNode
}

export const Layout = (props : AppLayout) => {
    const {children} = props
  return (
    <>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};
