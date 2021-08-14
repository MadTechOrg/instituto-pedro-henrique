import {
  ExtendedRecordMap, BlockMap, Role, Block,
} from 'notion-types';

interface Params {
  pageId: string
}

export interface Context {
  params: Params
}

export interface RecordMap {
  recordMap: ExtendedRecordMap
}

export interface BlockPost {
  block: BlockMap
}

export interface BlockItem {
  role: Role
  value: Block
}

export interface PageCover {
  page_cover: string
}
