import { useEffect, useState } from 'react';

const Preview = ({ page, getPreview, setData }: any) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!page) {
			const urlParams = new URLSearchParams(window.location.search);
			const previewToken = urlParams.get('preview_token');
			console.log(previewToken);
			if (previewToken) {
				setLoading(true);
				const setPreview = async () => {
					const preview = await getPreview('preview', previewToken);
					if (preview) {
						setData(preview);
						setLoading(false);
					}
				};
				setPreview();
			}
		}
	}, []);
	if (loading) {
		return (
			<div className="fixed inset-0 z-[1000] flex h-full w-full items-center justify-center bg-black text-center text-[5vw] font-bold text-white">
				Loading preview...
			</div>
		);
	}
	return <></>;
};
export default Preview;
