import React from "react";
import { toast } from "react-toastify";

const InstalledAppCard = ({ installedApp }) => {
  const {image,title,downloads,ratingAvg,size } = installedApp;
  const handleClick = () => {
    toast.error("Successfully Uninstalled");
  };
  return (
    <div className="p-4 bg-white flex justify-between items-center rounded-md">
      <div className="flex items-center gap-4">
        <img className="h-20 rounded-xl" src={image} alt="" />
        <div>
          <h4 className="text-[#001931] text-[20px] font-semibold">{title}</h4>
          <div className="flex items-center gap-4">
            <span className="flex items-center font-medium text-[16px] text-[#00D390] gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.96764 10.56C3.3211 10.56 3.60764 10.8465 3.60764 11.2V12.48C3.60764 12.6497 3.67505 12.8125 3.7951 12.9325C3.91511 13.0525 4.07789 13.12 4.24764 13.12H11.9276C12.0974 13.12 12.2601 13.0526 12.3802 12.9325C12.5002 12.8125 12.5676 12.6497 12.5676 12.48V11.2C12.5676 10.8465 12.8542 10.56 13.2076 10.56C13.5611 10.56 13.8476 10.8465 13.8476 11.2V12.48C13.8476 12.9892 13.6454 13.4776 13.2853 13.8376C12.9252 14.1977 12.4368 14.4 11.9276 14.4H4.24764C3.73843 14.4 3.25006 14.1978 2.88998 13.8376C2.52993 13.4776 2.32764 12.9892 2.32764 12.48V11.2C2.32764 10.8465 2.61417 10.56 2.96764 10.56Z"
                  fill="#00D390"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.43501 6.90746C4.68495 6.65752 5.09017 6.65752 5.34011 6.90746L8.08755 9.65491L10.835 6.90746C11.0849 6.65752 11.4902 6.65752 11.7401 6.90746C11.9901 7.15738 11.9901 7.56262 11.7401 7.81254L8.54009 11.0125C8.29017 11.2625 7.88492 11.2625 7.635 11.0125L4.43501 7.81254C4.18508 7.56262 4.18508 7.15738 4.43501 6.90746Z"
                  fill="#00D390"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.08775 2.23999C8.44123 2.23999 8.72775 2.52653 8.72775 2.87999V10.56C8.72775 10.9135 8.44123 11.2 8.08775 11.2C7.73428 11.2 7.44775 10.9135 7.44775 10.56V2.87999C7.44775 2.52653 7.73428 2.23999 8.08775 2.23999Z"
                  fill="#00D390"
                />
              </svg>
              {downloads / 1000000000000 >= 1
                ? `${downloads / 1000000000000}T`
                : downloads / 1000000000 >= 1
                ? `${downloads / 1000000000}B`
                : downloads / 1000000 >= 1
                ? `${downloads / 1000000}M`
                : `${downloads / 1000}K`}
            </span>
            <span className="flex items-center font-medium text-[16px] text-[#FF8811] gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_2_847)">
                  <path
                    d="M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z"
                    fill="#FF8811"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_847">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {ratingAvg}
            </span>
            <span className="text-[#627382] text-[16px]">{size} MB</span>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleClick()}
          className="text-white text-[16px] font-semibold bg-[#00D390] rounded-sm px-4 py-3 cursor-pointer transition duration-200 hover:bg-[#00b87e]"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
