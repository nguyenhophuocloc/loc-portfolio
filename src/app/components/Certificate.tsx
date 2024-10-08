import CertificateCard from "./CertificateCard";

const certificates = [
  {
    title: "Back End Development and APIs",
    name: "freeCodeCamp",
    date: "Apr 2024",
    logo: "/images/certificate/certificate_1.jpg",
  },
  {
    title: "Back End Development and APIs",
    name: "freeCodeCamp",
    date: "Apr 2024",
    logo: "/images/certificate/certificate_2.jpg",
  },
  {
    title: "Back End Development and APIs",
    name: "freeCodeCamp",
    date: "Apr 2024",
    logo: "/images/certificate/certificate_1.jpg",
  },
  {
    title: "Back End Development and APIs",
    name: "freeCodeCamp",
    date: "Apr 2024",
    logo: "/images/certificate/certificate_1.jpg",
  },
];
const Certificate = () => {
  return (
    <section className="section" id="certificate">
      <div className="container">
        <h2 className="headline-2 mb-8">Certificate</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-fit">
          {certificates.map(({ title, name, date, logo }, key) => (
            <CertificateCard
              title={title}
              logo={logo}
              name={name}
              date={date}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
