import Layout from '@/components/Layout';
import Button from '@/components/buttons/Button';
import {
	OPACITY_BOTTOM,
	OPACITY_LEFT,
	STAGGER_CHILDREN,
} from '@/lib/animations';
import { motion } from 'framer-motion';

export default function Custom404() {
	return (
		<motion.div
			variants={STAGGER_CHILDREN}
			className="container flex min-h-screen flex-col items-center justify-center py-32 text-center"
		>
			<motion.h1
				variants={OPACITY_LEFT}
				className="text-[100px] md:text-[15vw]"
			>
				404
			</motion.h1>
			<motion.p
				variants={OPACITY_LEFT}
				className="mb-12 text-xl md:text-4xl"
			>
				Deze pagina bestaat niet.
			</motion.p>
			<motion.div
				variants={OPACITY_BOTTOM}
				className="flex items-center gap-4"
			>
				<Button className="bg-medium-blue text-white" href={'/'}>
					Homepagina
				</Button>
				<Button className="bg-main-sand text-white" href={'/contact'}>
					Neem contact op
				</Button>
			</motion.div>
		</motion.div>
	);
}
