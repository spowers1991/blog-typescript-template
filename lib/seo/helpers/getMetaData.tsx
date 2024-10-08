import { Metadata } from "../types/Metadata";

interface getMetaDataProps {
    story?: any; 
}

export const getMetaData = ({ story }: getMetaDataProps): Metadata => {
    const content = story?.content;
    return {
        title: content?.meta_title || 'Steven Powers - Template',
        description: content?.meta_description || 'Steven Powers - This is my template.',
        keywords: content?.meta_keywords || 'Steven Powers - Web Developer',
        no_index: content?.meta_no_index == true ? 'no index, no follow' : 'index, follow'
    };
};
