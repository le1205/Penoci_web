// _mock
import { _pricingHome, _brandsColor, _tours, _testimonials } from 'src/_mock';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import PricingHome from '../../pricing/home';
import {
  HomeHero,
  HomeNewStart,
  Prevent,
  // HomeQr,
  BenefitsP2P,
  HomeSupport,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      <HomeHero />

      <HomeNewStart />

      {/* <SendMoneyCountry tours={_tours.slice(0, 8)} /> */}
      <Prevent />

      {/* <HomeQr /> */}

      <BenefitsP2P />

      <HomeSupport testimonials={_testimonials} />

      {/* <HomeBrands brands={_brandsColor} /> */}

      {/* <HomeAppDown /> */}

      {/* <HomeDesc /> */}
    </>
  );
}
