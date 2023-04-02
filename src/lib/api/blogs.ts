import axios from "../axios"

export const getBlogSlugs = async () => {
    let url = `/api/v1/blog-slugs`
 
    const data = await axios.get(url)
        .then((res:any) => res.data)
        .catch((err:any) => {
            return err
        })

    return data
}

export const getBlogBySlug =  async (slug: string, previewToken?:string) => {
    let url = `/api/v1/blog/${slug}`


    if(previewToken) {
        url = `${url}?preview_token=${previewToken}`
    }

    const {data} = await axios.get(url)
        .then((res:any) => res.data)
        .catch((err:any) => {
            return {
                data: null
            }
        })


    return data
}