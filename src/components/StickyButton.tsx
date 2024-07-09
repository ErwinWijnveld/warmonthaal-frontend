import { OPACITY_LEFT } from '@/lib/animations';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Button from './buttons/Button';

const StickyButton = () => {
	const buttonRef = useRef(null) as any;
	const buttonRefDos = useRef(null) as any;
	// fade in after 8 seconds
	useEffect(() => {
		setTimeout(() => {
			if (buttonRef.current) {
				buttonRef.current.style.opacity = '1';
			}
			
			if (buttonRefDos.current) {
				buttonRefDos.current.style.opacity = '1';
			}
		}, 4000);
	});

	return (
		<>
			<div
				ref={buttonRef}
				className="fixed right-0 bottom-20 z-50 w-max opacity-0 transition duration-500"
			>
				<Button
					href="tel:+31683609670"
					className="block rounded-r-none bg-medium-blue !px-10 !text-left !font-semibold text-white"
				>
					<span className="-mb-4 block !text-[10px] md:-mb-5 md:!text-xs">
						Bel ons!
					</span>
					<br />
					+31 6 83 60 96 70
				</Button>
			</div>
			
			<div
				ref={buttonRefDos}
				className="fixed right-0 bottom-8 z-50 w-max opacity-0 transition duration-500"
			>
				<Button
					href="/vacature-zorgmedewerker"
					className="block rounded-r-none bg-medium-blue !px-10 !text-left !font-semibold text-white"
				>
					<span className="-mb-4 block !text-[10px] md:-mb-5 md:!text-xs">
						Bekijk vacature
					</span>
					<br />
					Wij zoeken ook vrijwilligers
				</Button>
			</div>
		</>
	);
};
export default StickyButton;
