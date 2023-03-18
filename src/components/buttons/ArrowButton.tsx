import Link from '../presets/Link';

const ArrowButton = ({ className, children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className={
				'group inline-flex items-center gap-6 rounded-full px-4 py-3 text-center text-xs font-bold uppercase md:px-8 md:text-sm ' +
				className
			}
		>
			{children}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="11.045"
				height="11.045"
				viewBox="0 0 11.045 11.045"
				className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
			>
				<path
					id="Icon_ionic-md-arrow-down"
					data-name="Icon ionic-md-arrow-down"
					d="M6.213,0V8.387l3.866-3.866.966,1L5.522,11.045,0,5.522l.966-.966L4.832,8.387V0Z"
					transform="translate(0 11.045) rotate(-90)"
					fill="#fff"
				/>
			</svg>
		</Link>
	);
};
export default ArrowButton;
