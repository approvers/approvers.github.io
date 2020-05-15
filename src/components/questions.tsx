import { FC } from "react";
import { ExternalLink } from "./externalLink";
import styles from "../sass/pages/index.module.sass";

export const Questions: FC = () => (
  <div>
    <section className={styles.aboutUs}>
      <h3>
        <span>Q</span>限界開発鯖ってなに?
      </h3>
      <p>
        <span>A</span>限界開発鯖は限界高専生が限界状態で開発を行っているDiscord鯖です。
      </p>
    </section>
    <section className={styles.aboutUs}>
      <h3>
        <span>Q</span>限界開発鯖の雰囲気が知りたい！
      </h3>
      <p>
        <span>A</span>こちらへどうぞ &rarr;{" "}
        <ExternalLink
          href="https://twitter.com/search?q=%23限界開発鯖&src=typed_query"
          className={styles.genkaiLink}
        >
          #限界開発鯖
        </ExternalLink>
      </p>
    </section>
  </div>
);
