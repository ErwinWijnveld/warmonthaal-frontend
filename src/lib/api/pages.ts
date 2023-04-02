import { PageProps } from "@/@types/page"
import axios from "../axios"

export const getPageSlugs = async () => {
    let url = `/api/v1/page-slugs`
 
    const data = await axios.get(url)
        .then((res:any) => res.data)
        .catch((err:any) => {
            return err
        })

    return data
}

export const getPageBySlug =  async (slug: string, previewToken?:string) => {
    let url = `/api/v1/page/${slug}`

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