import SearchBar from "./SearchBar";
import CompanyCard from "./CompanyCard";
import FilterButton from "./FilterButton";

const companies = [
  {
    name: "Google",
    location: "California, USA",
    internship: "Frontend Developer",
  },
  {
    name: "Tokopedia",
    location: "Jakarta, Indonesia",
    internship: "Backend Developer",
  },
  {
    name: "Shopee",
    location: "Singapore",
    internship: "UI/UX Designer",
  },
  {
    name: "Traveloka",
    location: "Jakarta, Indonesia",
    internship: "Fullstack Developer",
  },
  {
    name: "Gojek",
    location: "Jakarta, Indonesia",
    internship: "Mobile Developer",
  },
  {
    name: "Microsoft",
    location: "Washington, USA",
    internship: "Software Engineer",
  },
];

export default function CompanyList() {
  return (
    <section>
      <h1 className="text-3xl font-bold">
        Companies
      </h1>

      <p className="mt-2 text-slate-500">
        Explore companies offering internship opportunities.
      </p>

      <SearchBar />

      <div className="mt-5 flex gap-3">
        <FilterButton text="All" active={true} />
        <FilterButton text="Remote" />
        <FilterButton text="Onsite" />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {companies.map((company) => (
          <CompanyCard
            key={company.name}
            name={company.name}
            location={company.location}
            internship={company.internship}
          />
        ))}
      </div>
    </section>
  );
}