"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Team = (props: { teamdataNumber: string }) => {
  const { teamdataNumber } = props;
  const [teamData, setTeamData] = useState<any>(null);
  const [testimonialData, setTestimonialData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTeamData(data?.teamData);
        setTestimonialData(data?.testimonialData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="dark:bg-darkblack py-20 md:py-40">
      <div className="flex flex-col gap-24">
        <div className="container">
          <div className="flex flex-col gap-14 xl:gap-24">
            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
              <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">
                  {teamdataNumber ? teamdataNumber : teamData?.number}
                </span>
                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                <p className="section-bedge py-1.5 px-4 rounded-full">
                  The team
                </p>
              </div>
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5 ">
                  <h2 className="max-w-3xl">Meet our team</h2>
                  <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                    Our team is committed to redefining digital experiences
                    through innovative web solutions while fostering a diverse
                    and collaborative environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Image Section (Shivam Singh's Image) */}
            <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-24">
              {/* Left: CEO Image */}
              <div className="flex-shrink-0 w-full md:w-96 h-auto relative">
                {teamData?.data[0]?.image ? (
                  <Image
                    src={teamData?.data[0]?.image}
                    alt="Shivam Singh"
                    width={390}
                    height={470}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-300 rounded-lg" />
                )}
              </div>

              {/* Right: Quote Card */}
              <div className="w-full flex flex-col bg-secondary dark:bg-lightgray/10 p-6 lg:p-10 rounded-xl justify-between gap-10">
                <div className="flex flex-col text-xl md:text-2xl lg:text-3xl gap-4">
                  {/* Name with Leaf Icon */}
                  <h3 className="flex items-center gap-3 font-semibold text-white">
                    <Image
                      src={"/images/Icon/primary-leaf.svg"}
                      alt="icon"
                      width={36}
                      height={36}
                      className="animate-spin"
                    />
                    {teamData?.data[0]?.name}
                  </h3>
                {/* <hr color="white" /> */}
                  {/* Position */}
                  <p className="text-white text-base md:text-lg">
                    {teamData?.data[0]?.position}
                  </p>

                  {/* Quote */}
                  <h4 className="text-white text-base md:text-lg leading-relaxed">
                    {testimonialData?.data_4?.title}
                  </h4>
                </div>

                {/* Bottom Section (Social + Comma) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    {teamData?.data[0]?.socialLinks?.map(
                      (socialdata: any, index: any) => (
                        <a
                          key={index}
                          href={socialdata.link}
                            target="_blank"
                          className="block w-fit bg-[#fff] hover:bg-[#0a66c2] p-3 rounded-full"
                        >
                          <Image
                            src={socialdata.icon}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                        </a>
                      )
                    )}
                  </div>
                  <div>
                    <Image
                      src={"/images/testimonial/comma_vector.svg"}
                      alt="comma"
                      width={45}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid for Other Team Members */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7 ">
              {teamData?.data?.slice(1).map((data: any, index: any) => (
                <div key={index} className="group flex flex-col gap-6 ">
                  <div className="relative rounded-xl">
                    {/* Check if image is valid */}
                    {data?.image ? (
                      <Image
                        src={data?.image}
                        alt={data?.name}
                        width={390}
                        height={470}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"

                      />
                    ) : (
                      <div className="w-full h-96 bg-gray-300" /> // Placeholder if no image is found
                    )}
                    <div className="absolute hidden bg-secondary/40 bottom-0 left-0 w-full h-full group-hover:flex items-end justify-end p-8">
                      <div className="flex gap-3">
                        {data?.socialLinks?.map(
                          (socialdata: any, index: any) => (
                            <a
                              key={index}
                              href={socialdata.link}
                                target="_blank"
                              className="block w-fit bg-white hover:bg-primary p-3 rounded-full"
                            >
                              <Image
                                src={socialdata.icon}
                                alt="icon"
                                width={20}
                                height={20}
                              />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>{data?.name}</h4>
                    <span className="text-secondary/70 dark:text-white/70">
                      {data?.position}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
