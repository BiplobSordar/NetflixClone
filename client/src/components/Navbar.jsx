// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { LogOut, Menu, Search } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

// const Navbar = () => {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const { user, logout } = useAuthStore();

// 	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

// 	const { setContentType } = useContentStore();

// 	return (
// 		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
// 			<div className='flex items-center gap-10 z-50'>
// 				<Link to='/'>
// 					<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
// 				</Link>

// 				{/* desktop navbar items */}
// 				<div className='hidden sm:flex gap-2 items-center'>
// 					<Link to='/' className='hover:underline' onClick={() => setContentType("movie")}>
// 						Movies
// 					</Link>
// 					<Link to='/' className='hover:underline' onClick={() => setContentType("tv")}>
// 						Tv Shows
// 					</Link>
// 					<Link to='/history' className='hover:underline'>
// 						Search History
// 					</Link>
// 				</div>
// 			</div>

// 			<div className='flex gap-2 items-center z-50'>
// 				<Link to={"/search"}>
// 					<Search className='size-6 cursor-pointer' />
// 				</Link>
// 				<img src={user?.image ||'./avatar.png'} alt='Avatar' className='h-8 rounded cursor-pointer' />
// 				<LogOut className='size-6 cursor-pointer' onClick={logout} />
// 				<div className='sm:hidden'>
// 					<Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
// 				</div>
// 			</div>

// 			{/* mobile navbar items */}
// 			{isMobileMenuOpen && (
// 				<div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
// 					<Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
// 						Movies
// 					</Link>
// 					<Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
// 						Tv Shows
// 					</Link>
// 					<Link to={"/history"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
// 						Search History
// 					</Link>
// 				</div>
// 			)}
// 		</header>
// 	);
// };
// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search, X } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, logout } = useAuthStore();
	const { setContentType } = useContentStore();

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	return (
		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4 py-3 h-20 relative'>
			<div className='flex items-center  gap-10 z-50'>
				<Link to='/'>
					<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
				</Link>

				{/* desktop navbar items */}
				<div className='hidden sm:flex gap-6 items-center'>
					<Link
						to='/'
						onClick={() => setContentType("movie")}
						className='text-xl px-4 py-2 mx-2 border rounded shadow-md hover:bg-red-600 hover:text-white transition duration-300'
					>
						Movies
					</Link>
					<Link
						to='/'
						onClick={() => setContentType("tv")}
						className='text-xl px-1 py-2 mx-2 border rounded shadow-md hover:bg-red-600 hover:text-white transition duration-300'
					>
						TV Shows
					</Link>
					<Link
						to='/history'
						className='text-xl px-4 py-2 mx-2 border rounded shadow-md hover:bg-red-600 hover:text-white transition duration-300'
					>
						Search History
					</Link>
				</div>
			</div>

			<div className='flex gap-4 items-center z-50'>
				<Link to={'/search'}>
					<Search className='size-6 cursor-pointer text-white' />
				</Link>
				<img src={user?.image || './avatar1.png'} alt='Avatar' className='h-8 w-8 rounded-full cursor-pointer object-cover' />
				{user&&<LogOut className='size-6 cursor-pointer text-black' onClick={logout} />}
				
				<div className='sm:hidden'>
				<Menu className='size-6 cursor-pointer text-black' onClick={toggleMobileMenu} />
					
				</div>
			</div>

			{/* mobile navbar items */}
			<div
				className={`fixed top-0 right-0 h-full w-2/3 bg-black z-50 text-white transform transition-transform duration-300 ease-in-out sm:hidden  shadow-lg border-l border-gray-800 p-6 space-y-6 ${
					isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
<div className="flex justify-end">
<X className='size-6 cursor-pointer text-white' onClick={toggleMobileMenu} />
</div>

				<Link
					to='/'
					onClick={() => {
						setContentType("movie");
						toggleMobileMenu();
					}}
					className='block text-xl font-medium border rounded px-4 py-2 shadow hover:bg-red-600 hover:text-white transition duration-300'
				>
					Movies
				</Link>
				<Link
					to='/'
					onClick={() => {
						setContentType("tv");
						toggleMobileMenu();
					}}
					className='block text-xl font-medium border rounded px-4 py-2 shadow hover:bg-red-600 hover:text-white transition duration-300'
				>
					TV Shows
				</Link>
				<Link
					to='/history'
					onClick={toggleMobileMenu}
					className='block text-xl font-medium border rounded px-4 py-2 shadow hover:bg-red-600 hover:text-white transition duration-300'
				>
					Search History
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
