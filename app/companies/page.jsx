import CompanyList from "@/components/company/CompanyList";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";


export default function CompaniesPage() {
  return (
    <>
    <Navbar />
    
    <main className="min-h-screen bg-slate-50 p-8">
      <CompanyList />
    </main>
    <Footer />
    </>
  );
}