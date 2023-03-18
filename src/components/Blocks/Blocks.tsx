import HeroBig from '../HeroBig/HeroBig';
import TextUsps from '../TextUsps/TextUsps';
import Wysiwyg from '../Wysiwyg/Wysiwyg';

const Blocks = ({ blocks }: any) => {
	let blocksArray = [] as any;

	blocks?.map((block: any, index: any) => {
		switch (block?.type) {
			case 'hero-big':
				blocksArray.push(<HeroBig key={index} {...block} />);
				break;

			case 'text-usps':
				blocksArray.push(<TextUsps key={index} {...block} />);
				break;

			default:
				return null;
		}
	});

	return <>{blocksArray.map((blockComponent: any) => blockComponent)}</>;
};
export default Blocks;
