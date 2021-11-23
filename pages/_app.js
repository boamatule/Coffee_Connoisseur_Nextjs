import '../styles/global.css';

const MyApp = function ({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
