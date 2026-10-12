import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SignatureFlow } from '@/components/SignatureFlow';
import { FeatureRow } from '@/components/FeatureRow';
import { PrivateBalances } from '@/components/PrivateBalances';
import { GiftLink } from '@/components/GiftLink';
import { Security } from '@/components/Security';
import { Fees } from '@/components/Fees';
import { Proof } from '@/components/Proof';
import { Faq } from '@/components/Faq';
import { FinalCta, Footer } from '@/components/FinalCta';
import { Interactions } from '@/components/Interactions';

// Blocks alternate dark / light, as required by the brief.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />            {/* 1 dark  */}
        <SignatureFlow />   {/* 2 light */}
        <FeatureRow />      {/* 3 dark  */}
        <PrivateBalances /> {/* 4 light */}
        <GiftLink />        {/* 5 dark  */}
        <Security />        {/* 6 light */}
        <Fees />            {/* 7 dark  */}
        <Proof />           {/* 8 light */}
        <Faq />             {/* 9 dark  */}
        <FinalCta />        {/* 10 gradient */}
      </main>
      <Footer />
      <Interactions />
    </>
  );
}
