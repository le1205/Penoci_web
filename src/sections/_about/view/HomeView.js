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
  BenefitsP2P,
  HomeSupport,
  HomeAppDown,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      <HomeHero />

      <HomeNewStart />

      <SendMoneyCountry tours={_tours.slice(0, 8)} />

      <HomeQr />

      <BenefitsP2P />

      <HomeSupport />

      {/* <HomeBrands brands={_brandsColor} /> */}

      <HomeAppDown />

      {/* <HomeDesc /> */}
    </>
  );
}
