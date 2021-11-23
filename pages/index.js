import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/banner';
import Card from '../components/Card/Card.js';
import coffeeStores from '../data/coffee-stores.json';

import styles from '../styles/Home.module.css';

export default function Home () {
  const handleOnBannerBtnClick = () => {
    console.log('It is the Banner button');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="hero" />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStore, key) => (
            <Card
              key={key}
              name={coffeeStore.name}
              imgUrl={coffeeStore.imgUrl}
              href={`/coffee-store/${coffeeStore.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
