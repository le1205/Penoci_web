// _mock
import { _pricingHome, _brandsColor } from 'src/_mock';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import PricingHome from '../../pricing/home';
import {
  HomeHero,
  HomeFAQs,
  HomeNewStart,
  HomeForDesigner,
  HomeCombination,
  HomeCreateProfile,
  HomeQr,
  HomeApi,
  HomeSupport,
  HomeBrands,
  HomeAppDown,
  HomeDesc,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      <HomeHero />

      <HomeNewStart />

      <HomeCreateProfile />

      <HomeQr />

      <HomeApi />

      <HomeSupport />

      <HomeBrands brands={_brandsColor} />

      <HomeAppDown />

      <HomeDesc />
    </>
  );
}
