import { OPACITY, OPACITY_SCALE } from '@/lib/animations';
import { motion } from 'framer-motion';

const TopLeftBlue = () => {
	return (
		<>
			{' '}
			<motion.div
				variants={OPACITY_SCALE}
				className="absolute top-32 -left-[35px] hidden aspect-square w-[95px] scale-50 rounded-full bg-dark-blue md:top-[25%] md:block md:scale-100"
			/>
			<motion.div
				variants={OPACITY_SCALE}
				className="absolute top-20 left-[10%] hidden aspect-square w-[38px] scale-50 rounded-full bg-light-blue md:top-[12%] md:block md:scale-100"
			/>
		</>
	);
};
export default TopLeftBlue;
