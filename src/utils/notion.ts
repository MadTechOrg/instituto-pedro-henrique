import { NotionAPI } from 'notion-client';
import { Block, BlockMap } from 'notion-types';
import { PageCover } from '../interfaces/post';

export const notion = new NotionAPI();

export const getImageUrl = (block: Block) => {
  const format = block.format as PageCover;
  const url = format?.page_cover || '';

  const imageHasDomain = url.includes('http');

  return `${imageHasDomain ? '' : 'https://www.notion.so'}${url}`;
};

export const getChildrenPages = (block: BlockMap, pageTitle: string = '') => Object
  .values(block)
  .filter(({ value: { type, properties } }) => (
    type === 'page' && properties?.title[0][0] !== pageTitle
  ));

export default {
  notion,
  getImageUrl,
  getChildrenPages,
};
