import Header from "@/components/dashboard/Header";
import Footer from "@/components/dashboard/Footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "#FFF9F5" }}
    >
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
