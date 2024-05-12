import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
