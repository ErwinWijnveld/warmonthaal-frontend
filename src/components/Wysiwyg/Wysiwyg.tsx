import { BlockProps } from '@/@types/blocks';

const Wysiwyg = ({ content }: BlockProps) => {
	return (
		<section>
			{content?.text && (
				<div
					className={content?.container ? 'container' : ''}
					dangerouslySetInnerHTML={{ __html: content.text }}
				/>
			)}
		</section>
	);
};
export default Wysiwyg;
