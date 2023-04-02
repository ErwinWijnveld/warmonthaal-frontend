import { PageContextProvider } from '@/hooks/usePage';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Meta from './Meta';

type LayoutProps = {
	children?: React.ReactNode;
	[key: string]: any;
};

const Layout = ({ children, ...rest }: LayoutProps) => {
	if (!rest?.slug) return <Error statusCode={404} />;

	return (
		<PageContextProvider value={rest}>
			<Meta {...rest?.meta} />
			<Header menus={rest?.menus} />
			<main className="min-h-screen">{children}</main>
			<Footer menus={rest?.menus} />
		</PageContextProvider>
	);
};
export default Layout;
