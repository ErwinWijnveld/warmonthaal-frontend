import { PageContextProvider } from '@/hooks/usePage';
import Custom404 from '@/pages/404';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Meta from './Meta';
import StickyButton from './StickyButton';
import StickyHeader from './StickyHeader';

type LayoutProps = {
	children?: React.ReactNode;
	[key: string]: any;
};

const Layout = ({ children, ...rest }: LayoutProps) => {
	if (!rest?.slug) return <Custom404 />;

	return (
		<PageContextProvider value={rest}>
			<Meta {...rest?.meta} />
{/* 			<StickyHeader /> */}
			<Header menus={rest?.menus} />
			<main className="min-h-screen">{children}</main>
			<StickyButton />
			<Footer menus={rest?.menus} />
		</PageContextProvider>
	);
};
export default Layout;
