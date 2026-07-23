import { type Locale } from '@/i18n/config';
import StructuredData from '@/app/components/StructuredData';
import { DispatchLandingPage } from './DispatchLandingPage';

interface LandingPageProps {
  locale?: Locale;
}

export function LandingPage({ locale = 'fr' }: LandingPageProps) {
  return (
    <>
      <StructuredData />
      <DispatchLandingPage locale={locale} />
    </>
  );
}

export default LandingPage;
