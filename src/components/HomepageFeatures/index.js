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
        CS 지식과 프로그래밍 언어 등의 내용들을 학습하여 정리하고 문서화 하고
        있습니다.
      </>
    ),
  },
  {
    title: "Today I Learnd",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        성장 기록을 쌓고 되돌아보기 위해서 하루동안 학습한 내용을 일기 형식으로
        기록하고 있습니다.
      </>
    ),
  },
  {
    title: "Project",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        프로젝트를 진행하면서 진행 과정이나 트러블 슈팅들을 기록하고 있습니다.
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
