import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getPageTitle } from 'notion-utils';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import { BlockMap } from 'notion-types';
import {
  BlockItem, Context, RecordMap, PageCover,
} from '../../interfaces/post';
import Header from '../../components/Header';
import style from './BlogPost.module.css';

const notion = new NotionAPI();

export const getStaticProps = async ({ params: { pageId } }: Context) => {
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const getImageUrl = (url: string) => {
  const imageHasDomain = url.includes('http');

  return `${imageHasDomain ? '' : 'https://www.notion.so'}${url}`;
};

const getChildrenPages = (block: BlockMap, pageTitle: string) => Object
  .values(block)
  .filter(({ value: { type, properties } }) => (
    type === 'page' && properties?.title[0][0] !== pageTitle
  ));

const renderPosts = (posts: Array<BlockItem>) => posts
  .map(({ value }: BlockItem) => {
    const format = value.format as PageCover;

    return value && (
      <Link href={value.id} passHref key={value.id}>
        <div className={style.post__page}>
          <div className={style.post__pageImage}>
            {
              format?.page_cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={getImageUrl(format?.page_cover)}
                  alt=""
                />
              )
            }
          </div>
          <h2 className={style.post__pageTitle}>
            {value.properties.title[0][0]}
          </h2>
        </div>
      </Link>
    );
  });

export default function BlogPost({ recordMap }: RecordMap) {
  if (!recordMap) return null;

  const title = getPageTitle(recordMap);
  const childrenPages = getChildrenPages(recordMap.block, title);

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <meta name="description" content={title} />
        <title>{title}</title>
      </Head>
      <Header />
      <main className={style.post}>
        {
          !childrenPages.length
            ? (
              <article className={style.post__article}>
                <button type="button" className={style.post__back} onClick={goBack}>
                  &lt; Voltar
                </button>
                <NotionRenderer
                  recordMap={recordMap}
                  fullPage
                  darkMode={false}
                />
              </article>
            )
            : (
              <article className={style.post__container}>
                <h1 className={style.post__title}>{title}</h1>
                <section className={style.post__pageList}>
                  {renderPosts(childrenPages)}
                </section>
              </article>
            )
        }
      </main>
    </>
  );
}
