import React from "react";
import { useSession } from 'next-auth/react'
import SidebarRow from "./SidebarRow";
import {ChevronDownIcon, ShoppingBagIcon, UserGroupIcon} from '@heroicons/react/24/outline'
import {CalendarIcon, ClockIcon, ComputerDesktopIcon,UserIcon} from '@heroicons/react/24/solid'

const Sidebar = () => {
	const { data: session, status } = useSession()
  const loading = status === "loading"
	return (
		<div className=" p-2 mt-5 max-w-[600px] lg:min-w-[300px]">
			<SidebarRow src={session.user.image} alt={'/'} title={session.user.name} />
			<SidebarRow Icon={UserIcon} title='Friends'/>
			<SidebarRow Icon={UserGroupIcon} title='Groups'/>
			<SidebarRow Icon={ShoppingBagIcon} title='Marketplace'/>
			<SidebarRow Icon={ComputerDesktopIcon} title='watch'/>
			<SidebarRow Icon={CalendarIcon} title='Events'/>
			<SidebarRow Icon={ClockIcon} title='Memories'/>
			<SidebarRow Icon={ChevronDownIcon} title='See More'/>
		</div>
	)
};

export default Sidebar;
