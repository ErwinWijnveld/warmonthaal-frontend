import { BlogProps } from '@/@types/blog';
import Button from '@/components/buttons/Button';
import Layout from '@/components/Layout';
import Image from '@/components/presets/Image';
import Preview from '@/components/Preview/Preview';
import { OPACITY_BOTTOM, OPACITY_LEFT } from '@/lib/animations';
import { getBlogBySlug, getBlogSlugs } from '@/lib/api/blogs';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';

const Page = ({ page }: { page: BlogProps }) => {
	const [data, setData] = useState(page);

	const date = data?.date ? new Date(data?.date) : null;
	// format to 12-01-2023
	const formattedDate = data?.date
		? `${('0' + date.getDate()).slice(-2)}-${(
				'0' +
				(date.getMonth() + 1)
		  ).slice(-2)}-${date.getFullYear()}`
		: null;

	return (
		<>
			<Preview page={page} getPreview={getBlogBySlug} setData={setData} />
			<Layout {...data}>
				<>
					<div className="h-[116px]"></div>
					<div className="container">
						<motion.div
							variants={OPACITY_LEFT}
							className="relative h-[344px] w-full overflow-hidden rounded-full"
						>
							<Image
								src={data?.image ?? '/images/placeholder.jpg'}
								alt={data?.title}
								className=" object-cover"
								fill
							/>
						</motion.div>
						<motion.div
							variants={OPACITY_BOTTOM}
							className="mx-auto py-6 pb-32  text-sm lg:max-w-3xl"
						>
							{data?.author && data?.date && (
								<p className="mb-2 text-light-blue">
									{data.author} -{' '}
									{formattedDate ? formattedDate : ''}
								</p>
							)}
							{data?.title && (
								<h1 className="lg:text-5xl">{data.title}</h1>
							)}
							{data?.content && (
								<div
									className="text mt-6"
									dangerouslySetInnerHTML={{
										__html: data.content,
									}}
								/>
							)}
							{(data?.button_link || data?.button_title) && (
								<div className="pt-6">
									<Button
										href={data?.button_link || '/'}
										className=" bg-main-sand text-white"
									>
										{data?.button_title}
									</Button>
								</div>
							)}
						</motion.div>
					</div>
				</>
			</Layout>
		</>
	);
};
export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const page = await getBlogBySlug(params?.slug as any);

	return {
		props: {
			page,
		},
		revalidate: 5,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pathsWithoutPrefix = await getBlogSlugs();

	const paths = pathsWithoutPrefix.map(
		(path: string) => '/nieuwtjes/' + path
	);

	return {
		paths: paths,
		fallback: true,
	};
};
