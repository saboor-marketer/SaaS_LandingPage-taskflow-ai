

const TrustedCompanies = () => {
  const companies = ['Nova', 'Vertex', 'Cloudly', 'Nexa', 'PixelWorks'];

  return (
    <section className="trusted">
      <div className="trusted-container">
        <h2 className="trusted-title">Trusted by productive teams worldwide</h2>
        <div className="trusted-logos">
          {companies.map((company, index) => (
            <div key={index} className="trusted-logo">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
