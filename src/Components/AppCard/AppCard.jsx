import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ trendingApp }) => {
  // console.log(trendingApp);
  const { image, id, title, ratingAvg, downloads } = trendingApp;
  return (
    <Link to={`/apps/${id}`}>
      <div className="p-4 bg-white rounded-sm cursor-pointer">
        <img className="w-full rounded-lg" src={image} alt="" />
        <h4 className="text-[20px] text-[#001931] font-medium my-4">{title}</h4>
        <div className="flex justify-between">
          <span className="flex items-center gap-2 px-2.5 py-1.5 bg-[#F1F5E8] rounded-sm w-fit font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.96764 11.06C3.3211 11.06 3.60764 11.3465 3.60764 11.7V12.98C3.60764 13.1497 3.67505 13.3125 3.7951 13.4325C3.91511 13.5525 4.07789 13.62 4.24764 13.62H11.9276C12.0974 13.62 12.2601 13.5526 12.3802 13.4325C12.5002 13.3125 12.5676 13.1497 12.5676 12.98V11.7C12.5676 11.3465 12.8542 11.06 13.2076 11.06C13.5611 11.06 13.8476 11.3465 13.8476 11.7V12.98C13.8476 13.4892 13.6454 13.9776 13.2853 14.3376C12.9252 14.6977 12.4368 14.9 11.9276 14.9H4.24764C3.73843 14.9 3.25006 14.6978 2.88998 14.3376C2.52993 13.9776 2.32764 13.4892 2.32764 12.98V11.7C2.32764 11.3465 2.61417 11.06 2.96764 11.06Z"
                fill="#00D390"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.43501 7.40743C4.68495 7.15749 5.09017 7.15749 5.34011 7.40743L8.08755 10.1549L10.835 7.40743C11.0849 7.15749 11.4902 7.15749 11.7401 7.40743C11.9901 7.65735 11.9901 8.06259 11.7401 8.31251L8.54009 11.5125C8.29017 11.7624 7.88492 11.7624 7.635 11.5125L4.43501 8.31251C4.18508 8.06259 4.18508 7.65735 4.43501 7.40743Z"
                fill="#00D390"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.08775 2.73999C8.44123 2.73999 8.72775 3.02653 8.72775 3.37999V11.06C8.72775 11.4135 8.44123 11.7 8.08775 11.7C7.73428 11.7 7.44775 11.4135 7.44775 11.06V3.37999C7.44775 3.02653 7.73428 2.73999 8.08775 2.73999Z"
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
          <span className="flex items-center gap-2 px-2.5 py-1.5 bg-[#FFF0E1] rounded-sm w-fit font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clipPath="url(#clip0_284_192)">
                <path
                  d="M15.9583 6.63748C15.8536 6.31349 15.5662 6.08339 15.2262 6.05275L10.6082 5.63342L8.78208 1.35927C8.64744 1.04603 8.34079 0.843262 8.00008 0.843262C7.65938 0.843262 7.35273 1.04603 7.21808 1.36L5.39198 5.63342L0.773211 6.05275C0.433847 6.08412 0.147219 6.31349 0.0418692 6.63748C-0.0634802 6.96146 0.0338123 7.31682 0.290533 7.54082L3.78122 10.6022L2.7519 15.1364C2.67658 15.4697 2.80598 15.8143 3.0826 16.0143C3.23128 16.1217 3.40524 16.1764 3.58066 16.1764C3.73191 16.1764 3.88193 16.1356 4.01658 16.0551L8.00008 13.6743L11.9821 16.0551C12.2735 16.2304 12.6408 16.2144 12.9168 16.0143C13.1936 15.8137 13.3229 15.469 13.2475 15.1364L12.2182 10.6022L15.7089 7.54143C15.9656 7.31682 16.0636 6.96207 15.9583 6.63748Z"
                  fill="#FF8811"
                />
              </g>
              <defs>
                <clipPath id="clip0_284_192">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;