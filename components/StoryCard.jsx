import Image from "next/image";
import React from "react";

const StoryCard = ({ name, story, profile }) => {
	return (
		<div className=" relative h-14 md:h-20 w-14 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x-hidden p-3
		transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
			<Image
      priority={'/'}
      alt="/"
				src={profile}
				
				className="absolute w-10 h-10 opacity-0 lg:opacity-100 rounded-full z-50"
			/>
      <Image
      priority={'/'}
      alt="/"
				src={story}
				layout={'fill'}
				className=" object-cover filter brightness-75 rounded-full lg:rounded-3xl"
			/>
			<p className=" absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
				{name}
			</p>
		</div>
	);
};

export default StoryCard;
