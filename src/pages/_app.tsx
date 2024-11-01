import '@/assets/styles/globals.scss';
import PageTransition from '@/components/PageTransition';
import { GoogleTagManager } from '@next/third-parties/google';
import type { AppProps } from 'next/app';
import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PageTransition>
			<Component {...pageProps} />
			<GoogleTagManager gtmId="GTM-W7LWGDPQ" />
		</PageTransition>
	);
}
