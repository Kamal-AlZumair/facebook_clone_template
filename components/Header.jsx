import Image from "next/image";
import React from "react";
import logo from "../assets/Facebook_logo_PNG12.png";
import avatar from "../assets/avatar-05.png";
import {
	BellIcon,
	ChatBubbleLeftRightIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
	FlagIcon,
	PlayIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcon";
import {useSession, signOut} from 'next-auth/react'


const Header = () => {
	const { data: session } = useSession();
	return (
		<div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
			{/* left */}
			<div className="flex items-center">
				<Image
					src={logo}
					alt="logo"
					width={40}
					height={40}
					className="w-auto h-auto bg-fixed"
				/>
				<div className=" flex ml-2 items-center rounded-full bg-gray-100 p-2">
					<MagnifyingGlassIcon className="h-4 md:h-6 text-gray-600" />
					<input
						className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none focus:outline-none"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>
			{/* Center */}
			<div className=" flex justify-center flex-grow">
				<div className=" flex space-x-2 md:space-x-6">
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>
			{/* right */}
			<div className=" flex items-center sm:space-x-2 justify-end">
				<Image
					onClick={signOut}
					src={session.user.image}
					alt={"/"}
					width={40}
					height={40}
					className="bg-fixed rounded-full cursor-pointer"
				/>
				<p className="hidden lg:inline-flex whitespace-nowrap font-semibold pr-3">
				{session.user.name}
				</p>
				<Squares2X2Icon className="icon" />
				<ChatBubbleLeftRightIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	);
};

export default Header;
