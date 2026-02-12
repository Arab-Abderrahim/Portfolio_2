import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './lib/theme-provider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { AvailableForWork } from './components/AvailableForWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
                        <Hero />
                        <About />
                        <Projects />
                        <Services />
                        <AvailableForWork />
                        <Contact />
                    </main>

                    <Footer />
                </div>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
