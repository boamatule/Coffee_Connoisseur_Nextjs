import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
  const { params } = staticProps;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => coffeeStore.id.toString() === params.id),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => ({
    params: {
      id: coffeeStore.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = function (props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { address, name, neighbourhood } = props.coffeeStore;

  console.log('props', props);
  return (
    <div>
      <Head>{name}</Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <p>{address}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};

export default CoffeeStore;
