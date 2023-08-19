import { OPACITY } from '@/lib/animations';
import { motion } from 'framer-motion';

const ScrollDown = ({ ...rest }: any) => {
	return (
		<motion.div
			variants={OPACITY}
			{...rest}
			onClick={() => {
				window.scrollTo({
					top: window.innerHeight,
					behavior: 'smooth',
				});
			}}
			className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 translate-y-1/2 hover:cursor-pointer md:block"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="29"
				height="51"
				viewBox="0 0 29 51"
				preserveAspectRatio="xMidYMid meet"
			>
				<g
					id="Group_493"
					data-name="Group 493"
					transform="translate(-703 -741)"
				>
					<rect
						id="Rectangle_8"
						data-name="Rectangle 8"
						width="16"
						height="16"
						rx="8"
						transform="translate(710 747)"
						fill="#628196"
					/>
					<g
						id="Rectangle_7"
						data-name="Rectangle 7"
						transform="translate(703 741)"
						fill="none"
						stroke="#628196"
						strokeWidth="3"
					>
						<rect width="29" height="51" rx="14.5" stroke="none" />
						<rect
							x="1.5"
							y="1.5"
							width="26"
							height="48"
							rx="13"
							fill="none"
						/>
					</g>
					<path
						id="Icon_ionic-md-arrow-down"
						data-name="Icon ionic-md-arrow-down"
						d="M9.785,5.977v5.142l2.37-2.37.592.614L9.362,12.748,5.977,9.362l.592-.592,2.37,2.349V5.977Z"
						transform="translate(708.638 745.638)"
						fill="#fff"
					/>
				</g>
			</svg>
		</motion.div>
	);
};
export default ScrollDown;
