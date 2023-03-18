import { PageProps } from '@/@types/page';
import Blocks from '@/components/Blocks/Blocks';
import Layout from '@/components/Layout';
import Preview from '@/components/Preview/Preview';
import { getPageBySlug, getPageSlugs } from '@/lib/api/pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';

const Page = ({ page }: { page: PageProps }) => {
	const [data, setData] = useState(page);

	return (
		<>
			<Preview page={page} getPreview={getPageBySlug} setData={setData} />
			<Layout {...data}>
				<Blocks blocks={data?.blocks} />
			</Layout>
		</>
	);
};
export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const page = await getPageBySlug(params?.slug as any);

	return {
		props: {
			page,
		},
		revalidate: 5,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pathsWithoutPrefix = await getPageSlugs();

	const paths = pathsWithoutPrefix.map((path: string) => '/' + path);
	const filteredPaths = paths.filter((path: string) => path !== '/home');

	return {
		paths: filteredPaths,
		fallback: true,
	};
};
