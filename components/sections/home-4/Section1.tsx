import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Section1() {
  const { profile } = portfolioData;

  return (
    <>
      {/*Home 4 Section 1*/}
      <section className="sec-1-home-4 sec-padding">
        <div className="container border-bottom">
          <div className="row">
            <div className="col-lg-8 mx-lg-auto">
              <div className="card">
                <div className="card-img mb-4 text-center">
                  <Image
                    className="rounded-circle avatar-128 object-fit-cover"
                    src={profile.image}
                    alt={profile.fullName}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="mb-3">Hi there! I’m {profile.fullName}.</h3>
                  <p className="mb-4 fs-7">{profile.role} — {profile.institution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
