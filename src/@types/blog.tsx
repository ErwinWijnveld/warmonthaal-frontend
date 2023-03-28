// return [
//     "id" => $this->id,
//     "slug" => $this->slug,
//     "title" => $this->title,
//     "blocks" => BlockController::getBlocks($this)["block_data"],
//     "created_at" => $this->created_at,
//     "updated_at" => $this->updated_at,
//     "meta" => [
//         "title" => $this->seo_title ?? $this->title,
//         "description" => $this->seo_description ?? null,
//     ],
//     // "menus" => new MenuCollection(Menu::all()),
// ];

import { BlockProps } from './blocks';

export type BlogProps = {
	id: number;
	slug: string;
	title: string;
	blocks: Array<BlockProps>;
	created_at: string;
	updated_at: string;
	meta: {
		title: string;
		description: string;
	};
	menus: any;
	image: any;
	author: any;
	date: any;
	content: any;
	excerpt: any;
	button_title: any;
	button_link: any;
};
