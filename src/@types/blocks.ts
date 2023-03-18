export type BlockProps = {
    id: string,
    type: string,
    content: {
        [key: string]: any,
    },
    children: {
        [key: string]: Array<BlockProps>,
    },
    position: number,
    medias:  {
        [key: string]: Array<{
            url: string,
            alt: string,
            role: string,
            width: number,
            height: number,
            metadatas: {
                video: string,
                caption: string,
            }
        }>
    },
    files: {
        [key: string]: Array<{
            url: string,
            role: string,
        }>
    },
    extra_data: {
        [key: string]: Array<any>
    }
}
