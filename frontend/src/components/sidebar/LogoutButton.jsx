import React from 'react'
import { BiLogOut } from "react-icons/bi";

export default function LogoutButton() {
	// const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{/* {!loading ? ( */}
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' />
			{/* ) : (
				<span className='loading loading-spinner'></span>
			)} */}
		</div>
	);
}
