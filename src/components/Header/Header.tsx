import logo from '@/assets/images/logolefttext.png';
import logoSmall from '@/assets/images/logowithouttext.png';
import { OPACITY_RIGHT, STAGGER_CHILDREN } from '@/lib/animations';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from '../presets/Image';
import Link from '../presets/Link';
import MobileMenu from './MobileMenu';

const Header = ({ menus }: any) => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const headerMenu =
		menus?.find((item: any) => item?.title === 'Header') || null;

	if (!headerMenu) return null;

	const headerBlock = headerMenu?.blocks[0];

	const { children } = headerBlock;

	const menuItems = children?.['menu-item'];

	return (
		<>
			<motion.nav
				className="fixed inset-x-0 top-0 z-[100] overflow-hidden py-4 md:absolute md:py-8"
				variants={STAGGER_CHILDREN}
			>
				<div className="container flex max-w-[1300px] items-center justify-between gap-8 md:justify-start lg:gap-16">
					{/* desktop logo */}
					<motion.div
						className="hidden xl:block"
						variants={OPACITY_RIGHT}
					>
						<Link href="/">
							<Image
								src={logo}
								alt="Logo"
								width={240}
								height={62}
								className="origin-left scale-110 object-contain"
							/>
						</Link>
					</motion.div>
					{/* mobile logo */}
					<motion.div
						className="xl:hidden"
						variants={OPACITY_RIGHT}
						onClick={() => setMobileMenu(false)}
					>
						<Link href="/">
							<Image
								src={logoSmall}
								alt="Logo"
								width={70}
								height={55}
							/>
						</Link>
					</motion.div>

					{/* menu items */}
					<div className="hidden items-center gap-2 md:flex lg:gap-4">
						{menuItems?.map((item: any, i: number) => {
							const { content } = item;
							return (
								<motion.div variants={OPACITY_RIGHT} key={i}>
									<Link
										className="block text-[10px] font-semibold uppercase lg:text-xs hover:underline"
										href={content?.link_url}
									>
										{content?.link_title}
									</Link>
								</motion.div>
							);
						})}
					</div>

					{/* mobile menu trigger */}
					<motion.div
						className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-main-sand text-white drop-shadow-md md:hidden"
						variants={OPACITY_RIGHT}
						onClick={() => setMobileMenu((prev) => !prev)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</motion.div>
				</div>
			</motion.nav>
			{mobileMenu && (
				<MobileMenu
					menuItems={menuItems}
					close={() => setMobileMenu(false)}
				/>
			)}
		</>
	);
};
export default Header;
