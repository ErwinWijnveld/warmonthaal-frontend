import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { EASE } from '../lib/consts';

const PageTransition = ({ children, ...rest }: any) => {
	const router = useRouter();

	const [loaded, setLoaded] = useState(null) as any;

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<div>
			<AnimatePresence
				mode="wait"
				{...rest}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<motion.div
					key={router.asPath}
					transition={{
						duration: 1,
						ease: EASE,
					}}
					exit="exit"
					initial="initial"
					animate="animate"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default PageTransition;
