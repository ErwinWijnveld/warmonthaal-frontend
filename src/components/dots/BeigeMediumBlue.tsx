import { OPACITY, OPACITY_SCALE } from '@/lib/animations';
import { motion } from 'framer-motion';

const BeigeMediumBlue = ({ className, ...rest }: any) => {
	return (
		<div
			className={
				'flex h-[145px] w-[238px] flex-col justify-between ' + className
			}
		>
			<motion.div
				variants={OPACITY_SCALE}
				className="aspect-square w-8 self-end rounded-full bg-medium-blue"
			/>
			<motion.div
				variants={OPACITY_SCALE}
				className="aspect-square w-24 rounded-full bg-light-sand"
			/>
		</div>
	);
};
export default BeigeMediumBlue;
