import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
export default function experienceDetailsPage({ initialData }) {
  return (
    <>
      <BreadcrumbHeader
        desktopImage="/assets/img/hero/1.png"
        mobileImage="/assets/img/hero/1.png"
        shapeImage="/assets/img/hero/1/shape.svg"
        title="Experience"
        subtitle="Experience"
      />
      <div className="single-tour-section city_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="sub-heading text-center">
                <Heading
                  level={3}
                  text="sdffds"
                  className="text-26 text-white fw-500 mb-10"
                />
              </div>
              <div className="single-tour-inner blog-section experience-section">
                <div className="table-formatulli mt-0">
                  <ul>
                    <li><strong>Event Period :<span>From January 14, 2024 to March 24, 2024 (71 days)</span></strong></li>
                    <li><strong>Timings :<span>07:00 AM to 09:00 PM</span></strong></li>
                  </ul>
                </div>
                <Heading
                  level={2}
                  text="On January 22, 2024, Lord Shri Ram will be consecrated in the sanctum sanctorum of the newly constructed Ram Temple in Ayodhya, and his coronation will be carried out with rituals in a grand way."
                  className="exp-h2"
                />
                <p>In Indian social and cultural beliefs, Ayodhya, acknowledged as the "birthplace of Lord Rama," is revered as a center of self-superiority, spirituality, and culture.</p>
                <div className="list-data exp-time-section">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="padding-bottom">
                        <div className="row align-items-center">
                          <div className='col-md-12'>
                              <div className="destination-time-title">
                                <h4 className="text-xl md:text-2xl font-semibold text-20 text-white fw-500 table-title">List of Venues for organizing Ramotsav program in Ayodhya</h4>
                              </div>
                          </div>
                          <div className="col-lg-7 pagedata table-formatulli">                          
                            <ul className="textlist">
                              <li tabIndex={0}>Bharatkund, Nandigram, Ayodhya</li>
                              <li tabIndex={0}>Suryakund, Darshannagar, Ayodhya</li>
                              <li tabIndex={0}>Guptarghat, Ayodhya</li>
                              <li tabIndex={0}>Jhunkighat, Ayodhya</li>
                              <li tabIndex={0}>Badi Devkali, Ayodhya</li>
                              <li tabIndex={0}>Gulabbari, Ayodhya</li>
                              <li tabIndex={0}>Ram Ghat Halt-Next to Satrangi Bridge, Ayodhya</li>
                              <li tabIndex={0}>Next to Saket Petrol Pump, Ayodhya</li>
                              <li tabIndex={0}>Parag Dairy, Ayodhya</li>
                              <li tabIndex={0}>Railway Station Ayodhya Dham, Ayodhya</li>
                            </ul>
                          </div>
                          <div className="col-lg-5 d-flex align-items-center">
                            <div className="image paragra-img">
                              <figure className="feature-image1">
                                <img className="rounded shadow-black"
                                  src="https://www.gudtogoholidays.com/sites/default/files/imagenodes/small/paragraph-image-2497.jpg"
                                  alt="List of Venues for organizing Ramotsav program in Ayodhya"
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="padding-bottom">
                        <div className="row align-items-center">
                          <div className='col-md-12'>
                              <div className="destination-time-title">
                                <h4 className="text-xl md:text-2xl font-semibold text-20 text-white fw-500 table-title">Major Events</h4>
                              </div>
                          </div>
                          <div className="col-lg-5 d-flex align-items-center">
                            <div className="image paragra-img">
                              <figure className="feature-image1">
                                <img className="rounded shadow-black"
                                  src="https://www.gudtogoholidays.com/sites/default/files/imagenodes/small/paragraph-image-2503.jpg"
                                  alt="Major Events" 
                                />
                              </figure>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="pagedata table-formatulli">
                              <ul className="textlist">
                                <li tabIndex={0}>Performance by Indian and foreign Ramlila groups</li>
                                <li tabIndex={0}>Shri Ram Katha, Sermon and Bhajan Program</li>
                                <li tabIndex={0}>Shastriya/Up-Shastriya Gayan and Vaadan</li>
                                <li tabIndex={0}>Shastriya Nritya and Dance-Dramas</li>
                                <li tabIndex={0}>
                                  Performance by artists from regional cultural centers
                                </li>
                                <li tabIndex={0}>Literary discussions and poetry seminars</li>
                                <li tabIndex={0}>Kavi Sammelan and Theatrical Performance</li>
                                <li tabIndex={0}>
                                  Story reading, storytelling, musical poetry performances
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
