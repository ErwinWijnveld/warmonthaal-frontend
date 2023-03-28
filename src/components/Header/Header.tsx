import logo from '@/assets/images/logolefttext.png';
import { OPACITY_TOP, STAGGER_CHILDREN } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from '../presets/Image';
import Link from '../presets/Link';

const Header = () => {
	return (
		<motion.nav
			className="absolute inset-x-0 top-0 py-8"
			variants={STAGGER_CHILDREN}
		>
			<div className="container">
				<motion.div variants={OPACITY_TOP}>
					<Link href="/">
						<Image src={logo} alt="Logo" width={200} height={50} />
					</Link>
				</motion.div>
			</div>
		</motion.nav>
	);
};
export default Header;
