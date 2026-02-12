import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './lib/theme-provider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Lazy load components for performance
const Hero = lazy(() => import('./components/Hero').then(module => ({ default: module.Hero })));
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const AvailableForWork = lazy(() => import('./components/AvailableForWork').then(module => ({ default: module.AvailableForWork })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme-v2">
                <div className="min-h-screen bg-background text-foreground">
                    {/* Navigation */}
                    <Navbar />

                    {/* Main content */}
                    <main>
                        <Suspense fallback={
                            <div className="flex items-center justify-center min-h-screen">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                            </div>
                        }>
                            <Hero />
                            <About />
                            <Projects />
                            <Services />
                            <AvailableForWork />
                            <Contact />
                        </Suspense>
                    </main>

                    <Footer />
                </div>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
