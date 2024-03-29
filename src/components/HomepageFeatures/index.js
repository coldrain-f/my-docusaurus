import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        {/* Docusaurus was designed from the ground up to be easily installed and */}
        {/* used to get your website up and running quickly. */}
        학습한 지식을 잊지 않고 꾸준히 기억하기 위해서 배운 내용을 정리하고
        문서화하고 있습니다.
      </>
    ),
  },
  {
    title: "Blug",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        성장 기록을 쌓고 자신을 되돌아보기 위해서 블로그를 작성하고 있습니다.
      </>
    ),
  },
  {
    title: "Project",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        토이 프로젝트를 하면서 진행 과정이나 트러블 슈팅을 기록하고
        있습니다.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
