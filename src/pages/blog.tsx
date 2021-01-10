import type { GetStaticProps, NextPage } from "next";
import { Metadata, getSortedBlogMetadatas } from "../lib/blog-fetch";
import { Avatar } from "../components/avatar";
import { Button } from "../components/button";
import { DateString } from "../components/date";
import type { FC } from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
import { Paper } from "../components/paper";
import { Title } from "../components/title";
import styles from "../scss/pages/blog.module.scss";

const BlogCard: FC<Metadata> = ({ id, title, date, author }) => (
  <Paper>
    <Avatar name={title} />
    <div className={styles.cardText}>
      <h3 className={styles.blogTitle}>{title}</h3>
      {author}
      <DateString dateString={date} />
      <Link href={`/blog/${id}`}>
        <Button>
          <a className={styles.pageLink}>記事を読む &rarr;</a>
        </Button>
      </Link>
    </div>
  </Paper>
);

const BlogPage: NextPage<{ blogs: Metadata[] }> = ({ blogs }) => (
  <Layout pageName="限界開発鯖 - ブログ">
    <Title>ブログ</Title>
    <section className={styles.main}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getSortedBlogMetadatas();
  return { props: { blogs } };
};

export default BlogPage;
