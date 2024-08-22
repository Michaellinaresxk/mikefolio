/* eslint-disable react/prop-types */
"use client";
import Image from "next/image";
const WebsiteCard = ({ image, title, app_link }) => {
  return (
    <>
      <div className="project-card__body text-white rounded-lg mt-10 overflow-hidden mx-auto">
        <a className="flex" href={app_link} target="_blank">
          <Image src={image} className="w-full" alt={title} />
        </a>
      </div>
    </>
  );
};
export default WebsiteCard;
