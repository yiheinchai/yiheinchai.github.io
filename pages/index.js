import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styles from "./index.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <center>
          Hi!👋 I am a 3rd year iBSc Neuroscience student at UCL. Interested in alignment optimisation of incentives, cranial loopy
          thingys and electron ditches!
        </center>
        <small>
        <i style={{fontSize: '10px'}}>
          <pre>const business = "alignment optimisation of incentives"</pre>
          <pre>const brain = "cranial loopy thingys"</pre>
          <pre>const computers = ["electron ditches"]</pre>
        </i></small>
        <div>
          <h3>Posts</h3>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => {
              return (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
