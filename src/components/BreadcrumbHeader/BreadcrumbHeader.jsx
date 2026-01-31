import React from 'react';

const BreadcrumbHeader = ({
  desktopImage,
  mobileImage,
  shapeImage,
  title,
  subtitle
}) => {
  return (
    <section className="pageHeader -type-1 is-in-view">
      <div className="pageHeader__bg relative">
        <div className="relative w-full h-full">
          <img 
            src={desktopImage} 
            alt="background" 
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
          />
          {mobileImage && (
            <img 
              src={mobileImage} 
              alt="background" 
              className="absolute inset-0 w-full h-full object-cover block md:hidden"
            />
          )}
          <div className={`absolute inset-0 bg-linear-to-r from-black/40 to-black/30`}></div>
        </div>
        {/* {shapeImage && (
          <img 
            src={shapeImage} 
            alt="shape" 
            className="absolute bottom-0 left-0 z-10 w-full md:w-auto"
          />
        )} */}
      </div>      
      <div className="container z-20 bread-positin">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title text-white">{title}</h1>
              {subtitle && (
                <p className="pageHeader__text">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbHeader;