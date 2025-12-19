import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import WaitlistModal from '@/components/WaitlistModal';

// Lazy load below-the-fold components
const Workflow = dynamic(() => import('@/components/Workflow'));
const CoreIntelligence = dynamic(() => import('@/components/CoreIntelligence'));
const ComplianceShield = dynamic(() => import('@/components/ComplianceShield'));
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'));
const Security = dynamic(() => import('@/components/Security'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Footer = dynamic(() => import('@/components/Footer'));

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
