import React from 'react';

function CarPhotos({ image }) {
  return (
    <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col text-white bg-blue-600 rounded-xl max-md:max-w-full">
          <div className="flex relative flex-col py-7 pr-16 pl-6 w-full min-h-[360px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src={image}
              alt="Vehicle"
              className="object-cover absolute inset-0 size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPhotos;
