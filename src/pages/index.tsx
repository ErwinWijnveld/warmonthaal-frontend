import { PageProps } from '@/@types/page';
import Blocks from '@/components/Blocks/Blocks';
import Layout from '@/components/Layout';
import Preview from '@/components/Preview/Preview';
import { getPageBySlug } from '@/lib/api/pages';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

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

export const getStaticProps: GetStaticProps = async () => {
	const page = await getPageBySlug('home');

	return {
		props: {
			page,
		},
		revalidate: 5,
	};
};
