// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "../styles/globals.css";

import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
