import { OPACITY, OPACITY_SCALE } from '@/lib/animations';
import { motion } from 'framer-motion';

const BeigeLightBlue = ({ className, ...rest }: any) => {
	return (
		<motion.div
			variants={OPACITY_SCALE}
			className={
				'flex h-[145px] w-[238px] flex-col justify-between ' + className
			}
		>
			<div className="aspect-square w-8 rounded-full bg-light-blue" />
			<div className="aspect-square w-24 self-end rounded-full bg-light-sand" />
		</motion.div>
	);
};
export default BeigeLightBlue;
