import { portfolioData } from "@/data/portfolio";

export default function Section2() {
  const { skills } = portfolioData;

  return (
    <>
      {/*Home 4 Section 2*/}
      <section className="sec-2-home-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-lg-auto">
              <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3 ps-0">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <a href="#" className="tag-item style-2 rounded-pill">
                      <span className="icon d-inline-flex align-items-center justify-content-center" style={{ width: 24, height: 24 }}>
                        {skill.icon ? (
                          // use a simple <img> to avoid Next.js image domain config
                          <img src={skill.icon} alt={`${skill.name} logo`} style={{ width: 20, height: 20, display: "block" }} />
                        ) : (
                          <span
                            style={{
                              width: 16,
                              height: 16,
                              display: "inline-block",
                              borderRadius: "50%",
                              backgroundColor: skill.color,
                            }}
                          />
                        )}
                      </span>
                      <span>{skill.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
