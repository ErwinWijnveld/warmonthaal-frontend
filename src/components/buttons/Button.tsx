import Link from '../presets/Link';

const Button = ({ className, children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className={
				'rounded-full px-8 py-3 text-center text-xs font-bold uppercase md:px-12 md:text-sm lg:px-16 ' +
				className
			}
		>
			{children}
		</Link>
	);
};
export default Button;
