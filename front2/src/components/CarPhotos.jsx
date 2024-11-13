import React from 'react';

function CarPhotos() {
  return (
    <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col text-white bg-blue-600 rounded-xl max-md:max-w-full">
          <div className="flex relative flex-col py-7 pr-16 pl-6 w-full min-h-[360px] max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ab3b376b9124ff97f57c3716cfdf11bc3baec9af6dae6cbbdc357457dde857a?placeholderIfAbsent=true&apiKey=bab5144b7d534b36b73a0294db172f07" alt="Sports car background" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative flex-col max-w-full w-[372px]">
              <h1 className="text-3xl font-semibold tracking-tighter leading-10">
                Sports car with the best design and acceleration
              </h1>
              <p className="mt-4 text-base font-medium tracking-tight leading-6">
                Safety and comfort while driving a <br /> futuristic and elegant sports car
              </p>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/66f7a1e23494fe454fa1db6cb3c24023f412b371fd3baee22ff7a948ea88d2eb?placeholderIfAbsent=true&apiKey=bab5144b7d534b36b73a0294db172f07" alt="Sports car" className="object-contain self-end mt-7 max-w-full aspect-[3.04] w-[359px]" />
          </div>
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {[3, 4, 5].map((num) => (
              <div key={num} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src={`http://b.io/ext_${num}-`} alt={`Car view ${num - 2}`} className="object-contain grow shrink-0 max-w-full rounded-xl aspect-[1.19] w-[148px] max-md:mt-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPhotos;