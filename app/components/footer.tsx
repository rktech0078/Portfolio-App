'use client'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-background border-t border-border/40'>
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand & Copyright */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-xl font-bold tracking-tight hover:text-yellow-500 transition-colors">
                            Abdul Rafay Khan
                        </Link>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} All rights reserved. <br className="hidden md:block" />
                            Built with Next.js & Tailwind CSS.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <SocialLink href="https://github.com/rktech0078" icon={<FaGithub />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/" icon={<FaLinkedin />} label="LinkedIn" />
                        <SocialLink href="https://www.facebook.com/profile.php?id=100051895934107" icon={<FaFacebook />} label="Facebook" />
                        <SocialLink href="https://www.youtube.com/@RKTECH-hf6yz" icon={<FaYoutube />} label="YouTube" />
                        <SocialLink href="https://www.fiverr.com/sellers/rafay0078/edit" icon={<TbBrandFiverr />} label="Fiverr" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Link
        href={href}
        target='_blank'
        className="text-muted-foreground hover:text-yellow-500 transition-all duration-300 hover:scale-110 text-xl"
        aria-label={label}
    >
        {icon}
    </Link>
)

export default Footer
