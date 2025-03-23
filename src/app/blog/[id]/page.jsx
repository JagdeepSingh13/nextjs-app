import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            eligendi maiores enim hic cumque corporis harum temporibus
            asperiores sequi impedit!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          vitae vel ab libero exercitationem voluptates, temporibus perferendis?
          Fuga dicta maxime blanditiis. Iusto alias cupiditate expedita, eos
          officia corrupti dolorum voluptatem recusandae et iure beatae
          consectetur provident laboriosam aut, quo non id repellat ut illo
          vitae. Eius fuga corporis eveniet harum nobis odio deserunt optio eum
          ea deleniti, quod quia repellendus inventore delectus enim animi ab
          consectetur libero ex. Esse ipsum minus debitis distinctio possimus
          ipsam, obcaecati eos quia similique sed expedita aliquam accusantium
          officia, rem, odit suscipit tenetur. Consequatur similique, eos
          corporis est blanditiis soluta nihil cumque labore. Suscipit,
          molestiae!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
