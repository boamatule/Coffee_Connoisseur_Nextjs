import { useRouter } from 'next/router';
import Head from 'next/head';

const DynamicRoute = function () {
  const router = useRouter();
  const query = router.query.dynamic;
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      Wsup kid!Learn to code and love yourself... : {query}
    </div>
  );
};

export default DynamicRoute;
