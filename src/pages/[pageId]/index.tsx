import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';
import {
  BlockItem, Context, RecordMap,
} from '../../interfaces/post';
import {
  notion, getImageUrl, getChildrenPages,
} from '../../utils/notion';
import Header from '../../components/Header';
import style from './BlogPost.module.css';

export const getStaticProps = async ({ params: { pageId } }: Context) => {
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 100,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const goBack = () => {
  window.history.back();
};

const renderPosts = (posts: Array<BlockItem>) => posts
  .map(({ value }: BlockItem) => {
    const imageUrl = getImageUrl(value);

    return value && (
      <Link href={value.id} passHref key={value.id}>
        <div className={style.post__page}>
          <div className={style.post__pageImage}>
            {
              imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt=""
                />
              )
            }
          </div>
          <p className={style.post__pageTitle}>
            {value.properties.title[0][0]}
          </p>
        </div>
      </Link>
    );
  });

export default function BlogPost({ recordMap }: RecordMap) {
  if (!recordMap) return null;

  const title = getPageTitle(recordMap);
  const childrenPages = getChildrenPages(recordMap.block, title);

  const meta = {
    title: `Instituto Pedro Henrique - ${title}`,
    description: `Instituto Pedro Henrique de Direitos Humanos, Transformando a realidade da periferia
      através de Oportunidades e Educação.`,
    image: getImageUrl(getChildrenPages(recordMap.block)[0].value),
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.title} />
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="description" content={meta.description} />
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
