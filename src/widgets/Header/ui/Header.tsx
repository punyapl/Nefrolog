import { useEffect, useState, } from 'react'
import Burger from '@/shared/assets/icons/Burger.svg'
import Logo from '@/shared/assets/icons/Logo.svg'
import QR from '@/shared/assets/images/QR.png'
import { useDevice, } from '@/shared/hooks/useDevice'
import { useScrollDetector, } from '@/shared/hooks/useScrollDetector'
import { Icon, } from '@/shared/ui/Icon'
import { NavBar, } from '@/shared/ui/NavBar'
import { Section, } from '@/shared/ui/Section'
import { AccessibilityButton } from '@/features/accessibility'

export const Header = () => {
    const { isMobile, isDesktop, } = useDevice()
    const isScrolled = useScrollDetector(170)

    const [sidebarOpen, setSidebarOpen,] = useState(false);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarOpen,]);

    return (
        <Section SectionClassName={`${isDesktop ? 'relative' : 'fixed'} left-0 right-0 z-60`}>
            <header className={`
                flex flex-col z-60 relative
                max-xl:m-5 max-xl:mt-0 max-md:m-3 max-md:mt-0 
                shadow-[0px_0px_16px_0px] shadow-primary/25 
                rounded-b-[20px] bg-background 
                `}
            >
                <div className={`flex items-center gap-2.5 p-5 max-md:p-2.5`} id='header-info'>
                    <div className={`flex items-center justify-between w-full `}>
                        <Icon
                            Svg={Logo}
                            width={isMobile ? 90 : 206}
                            height={isMobile ? 57 : 130}
                            aria-hidden="true"
                        />
                        <div className='flex max-xl:hidden flex-col gap-2.5 items-center'>
                            <p className='font-p-lg text-text-main'>г. Владивосток, ул. Светланская 87в</p>
                            <p className='font-p-lg text-text-main'>nefrolog-v@mail.ru</p>
                        </div>
                        <div className='flex max-xl:hidden flex-col gap-2.5 items-center'>
                            <p className='font-p-lg text-text-main'>Пн - Сб с 8-00 до 20-00</p>
                            <p className='font-p-lg text-text-main'>Вс с 10-00 до 14-00</p>
                        </div>
                        <div className='flex max-md:hidden gap-2.5 items-center'>
                            <div className='flex flex-col gap-2.5 items-end'>
                                <p className='font-p-lg text-text-main text-nowrap'>Лицензия №:</p>
                                <p className='font-p-lg text-text-main text-nowrap'>Л041-01023-25/00591275</p>
                                <p className='font-p-lg text-text-main text-nowrap'>от 28.07.2022</p>
                            </div>
                            <img src={QR} alt="QR код" className='w-[130px] aspect-square shrink-0' />
                        </div>
                        <AccessibilityButton />
                    </div>

                    <button
                        className="xl:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Открыть меню"
                        aria-expanded={sidebarOpen}
                        aria-controls="mobile-menu"
                        aria-haspopup="true"
                    >
                        <Icon
                            Svg={Burger}
                            width={isMobile ? 32 : 48}
                            height={isMobile ? 32 : 48}
                            aria-hidden="true"
                            className='stroke-2 stroke-primary'
                        />
                    </button>
                </div>

                <div className={`${isScrolled && isDesktop && 'fixed max-w-7xl w-full shadow-[0px_0px_16px_0px] shadow-primary/25 rounded-b-[20px] bg-background '} top-0 z-50`}>
                    <NavBar
                        className="hidden xl:flex"
                        role="navigation"
                        aria-label="Основное меню"
                    />
                </div>
            </header>
            <div
                id="mobile-menu"
                className={`
                            fixed h-[570px] max-md:h-auto max-md:bottom-3 inset-x-5 max-md:inset-x-3 top-[190px] max-md:top-[89px] z-50
                            bg-background rounded-[20px] 
                            transform transition-transform duration-400 ease-in-out
                            ${sidebarOpen ? 'translate-y-0' : '-translate-y-2/1'}
                        `}
                role="dialog"
                aria-modal="true"
                aria-label="Мобильное меню"
                aria-hidden={!sidebarOpen}
            >
                <nav
                    className="flex flex-col h-full justify-between p-8 max-md:p-2.5"
                    aria-label="Мобильная навигация"
                >
                    <NavBar
                        className="flex-col items-start gap-[30px]"
                        role="navigation"
                    />
                    <div className="flex justify-between max-md:flex-col max-md:gap-[10px]">
                        <div className='flex flex-col gap-2.5 items-start'>
                            <p className='font-p-lg text-text-main'>г. Владивосток, ул. Светланская 87в</p>
                            <p className='font-p-lg text-text-main'>nefrolog-v@mail.ru</p>
                        </div>
                        <div className='flex flex-col gap-2.5 items-end max-md:items-start'>
                            <p className='font-p-lg text-text-main'>Пн - Сб с 8-00 до 20-00</p>
                            <p className='font-p-lg text-text-main'>Вс с 10-00 до 14-00</p>
                        </div>
                    </div>
                </nav>
            </div>
            {sidebarOpen && (
                <div
                    className="fixed w-screen h-screen inset-0 bg-black/30 z-10"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                    role="presentation"
                />
            )}
        </Section>
    )
}