import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Workflow from '@/components/Workflow';
import CoreIntelligence from '@/components/CoreIntelligence';
import ComplianceShield from '@/components/ComplianceShield';
import ComparisonTable from '@/components/ComparisonTable';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

import WaitlistModal from '@/components/WaitlistModal';

export default function Home() {
    return (
        <main className="min-h-screen">
            <WaitlistModal />
            <Navbar />
            <Reveal width="100%">
                <Hero />
            </Reveal>
            <Reveal width="100%">
                <Workflow />
            </Reveal>
            <Reveal width="100%">
                <CoreIntelligence />
            </Reveal>
            <Reveal width="100%">
                <ComplianceShield />
            </Reveal>
            <Reveal width="100%">
                <ComparisonTable />
            </Reveal>
            <Reveal width="100%">
                <Security />
            </Reveal>
            <Reveal width="100%">
                <FAQ />
            </Reveal>
            <Footer />
        </main>
    );
}
