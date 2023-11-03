// _mock
import { _pricingHome, _brandsColor, _tours, _testimonials } from 'src/_mock';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import PricingHome from '../../pricing/home';
import {
  HomeHero,
  HomeFAQs,
  HomeNewStart,
  SendMoneyCountry,
  HomeQr,
  ReferPage,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      <HomeHero />

      <HomeNewStart />

      <ReferPage />

      <HomeQr />

      {/* <HomeBrands brands={_brandsColor} /> */}

      {/* <HomeAppDown /> */}

      {/* <HomeDesc /> */}
    </>
  );
}
