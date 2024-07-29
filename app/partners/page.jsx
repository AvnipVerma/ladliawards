"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import image from "@/assets/RNG-Logo-Strips.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image.png";

function Page() {
    const [showMoreTVS, setShowMoreTVS] = useState(false);
    const [showMorePlutus, setShowMorePlutus] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <div className="text-3xl sm:text-5xl text-red-600 font-bold mb-4">Event Partners</div>
                    <div className="flex justify-center">
                        <Image
                            src={image}
                            alt="Event Partner Logo"
                            className="w-full h-auto  sm:max-w-sm lg:max-w-7xl"
                        />
                    </div>
                </div>


                <div className="bg-red-600 h-2  mb-8"></div>

                <div className="flex flex-col items-center mb-8">
                    <div className="text-2xl sm:text-3xl text-red-600 font-bold mb-10">Presenting Partner</div>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
                        <Image src={image2} alt="Presenting Partner Logo" className="h-auto mb-4 md:mb-0" />
                        <div className="max-w-2xl text-gray-700 text-sm sm:text-base">
                            TVS Motor Company (BSE:532343 and NSE: TVSMOTOR) is a reputed two and three-wheeler manufacturer globally,
                            championing progress through sustainable mobility with four state-of-the-art manufacturing facilities located
                            in India and Indonesia. Rooted in our 100-year legacy of trust, value, and passion for customers, it takes pride
                            in making internationally accepted products of the highest quality through innovative and sustainable processes.
                            {showMoreTVS && (
                                <span>{' '} is the only two-wheeler company to have won the prestigious
                                    Deming Prize. Our products lead in their respective categories in the J.D. Power IQS and
                                    APEAL surveys. We have been ranked No. 1 Company in the J.D. Power Customer Service Satisfaction
                                    Survey for four consecutive years. Our group company Norton Motorcycles, based in the United Kingdom,
                                    is one of the most emotive motorcycle brands in the world. Our subsidiaries in the personal e-mobility space,
                                    Swiss E-Mobility Group (SEMG) and EGO Movement have a leading position in the e-bike market in Switzerland.
                                    TVS Motor Company endeavours to deliver the most superior customer experience across 80 countries in which we operate.</span>
                            )}
                            <button
                                className="text-blue-500 hover:underline ml-2"
                                onClick={() => setShowMoreTVS(!showMoreTVS)}
                            >
                                {showMoreTVS ? 'show less' : 'show more'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mb-8">
                    <div className="text-2xl sm:text-3xl text-red-600 font-bold">Associate Partner</div>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
                        <Image src={image3} alt="Associate Partner Logo" className="h-auto mb-4 md:mb-0" />
                        <div className="max-w-2xl text-gray-700 text-sm sm:text-base">
                            PlutusIAS from the house of Argasia Education Pvt Ltd is one of the best IAS coaching in India.
                            With a commitment towards quality education through online and classroom mode under a Hybrid
                            environment We teach more than 3000 students every year. Qualified teachers Like Dr. Huma Hassan,
                            gold medalist, Dr. Bijendra Jha, Doctorate, and Pradeep Kumar from IIT with diverse backgrounds from
                            educational institutes like JNU, DU, IIT, etc are strengths of...
                            {showMorePlutus && (
                                <span>{' '}PlutusIAS. Serving bureaucrats and retired IAS officers keep guiding students in their
                                    preparation. PlutusIAS under guidance. PlutusIAS makes students ready for different stages of exams like
                                    Prelims, Mains, and Interview and also takes help in assisting students from mentorship platforms like
                                    Thehinduzone.com and Gyanaj.com
                                    Since its inception, PlutusIAS has helped many students pass through their career journey.
                                    These days, PlutusIAS books on different subjects of UPSC exams are also helping many students
                                    in their preparation journey. </span>
                            )}
                            <button
                                className="text-blue-500 hover:underline ml-2"
                                onClick={() => setShowMorePlutus(!showMorePlutus)}
                            >
                                {showMorePlutus ? 'show less' : 'show more'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
