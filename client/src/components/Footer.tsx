import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-muted/50 border-t">
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="font-heading font-bold text-xl mb-4 gradient-text">
                            Creative Developer
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Building exceptional digital experiences with modern web technologies.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full" asChild>
                                <a href="https://github.com/Arab-Abderrahim" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full" asChild>
                                <a href="https://www.linkedin.com/in/abderrahim-arab-aa3183319/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full" asChild>
                                <a href="mailto:rahimwrk@gmail.com">
                                    <Mail className="h-5 w-5" />
                                    <span className="sr-only">Email</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Arab Abderrahim. All rights reserved.
                    </p>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full"
                    >
                        <ArrowUp className="h-4 w-4" />
                        <span className="sr-only">Back to top</span>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
