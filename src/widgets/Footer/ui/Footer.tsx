import { Link, } from 'react-router-dom'
import privacyDataConsent from '@/shared/assets/documents/privacyDataConsent.pdf'
import privacyPolicy from '@/shared/assets/documents/privacyPolicy.pdf'
import AtSymbol from '@/shared/assets/icons/AtSymbol.svg'
import Logo from '@/shared/assets/icons/Logo.svg'
import MapPin from '@/shared/assets/icons/MapPin.svg'
import Phone from '@/shared/assets/icons/Phone.svg'
import { navItems, } from '@/shared/const/navItems'
import { useDevice, } from '@/shared/hooks/useDevice'
import { Icon, } from '@/shared/ui/Icon'
import { Section, } from '@/shared/ui/Section'

export const Footer = () => {
    const { isMobile, isTablet, } = useDevice()

    return (
        <Section
            SectionClassName="self-end"
            ContainerClassName='w-full max-w-[1360px]'
        >
            <footer
                role="contentinfo"
                aria-label="Подвал сайта"
                className="flex flex-col max-w-[1360px] px-10 max-xl:px-[34px]
                    mt-10 max-xl:m-5 max-xl:mb-0 max-md:m-3 max-md:mb-0  
                    max-md:px-2.5 py-[30px] max-xl:py-5 gap-2.5 max-xl:gap-5 max-md:gap-2.5
                    shadow-[0px_0px_16px_0px] shadow-primary/25 rounded-t-[20px] bg-background
                    "
            >
                <div className="flex xl:justify-between max-xl:gap-8 max-xl:flex-wrap max-md:flex-col max-md:gap-4" role="region" aria-label="Контактная информация">
                    {/* Информация о клинике */}
                    <a href="/" aria-label="Перейти на главную страницу">
                        <Icon
                            Svg={Logo}
                            width={isMobile ? 116 : isTablet ? 146 : 206}
                            height={130}
                            aria-hidden="true"
                        />
                    </a>

                    {/* Контакты */}
                    <address className="flex flex-col gap-5 max-md:gap-4 max-xl:w-max max-md:w-full not-italic">
                        <h3 className="text-[28px] max-md:text-lg font-bold leading-none text-text-primary">Контакты</h3>
                        <div className="flex gap-2.5 items-center">
                            <Icon
                                Svg={Phone}
                                width={isMobile ? 16 : 24}
                                height={isMobile ? 16 : 24}
                                className="stroke-text-main stroke-3 max-md:stroke-1"
                                aria-hidden="true"
                            />
                            <a
                                href="tel:+79532250505"
                                className="text-lg max-md:text-sm font-normal text-text-main leading-tight text-nowrap"
                                aria-label="Позвонить по номеру +7 (953) 225‒05‒05"
                            >
                                +7 (953) 225‒05‒05
                            </a>
                        </div>
                        <div className="flex gap-2.5 items-center">
                            <Icon
                                Svg={AtSymbol}
                                width={isMobile ? 16 : 24}
                                height={isMobile ? 16 : 24}
                                className="stroke-text-main stroke-3 max-md:stroke-1"
                                aria-hidden="true"
                            />
                            <a
                                href="mailto:nefrolog-v@mail.ru"
                                className="text-lg max-md:text-sm font-normal text-text-main leading-tight text-nowrap"
                                aria-label="Написать письмо на nefrolog-v@mail.ru"
                            >
                                nefrolog-v@mail.ru
                            </a>
                        </div>
                    </address>

                    {/* Адреса и время работы */}
                    <div className="flex flex-col gap-5 max-md:gap-4 max-xl:w-max max-md:w-full">
                        <h3 className="text-[28px] max-md:text-lg font-bold leading-none text-text-primary">Адреса</h3>
                        <div className="flex max-xl:flex-row max-md:flex-col max-xl:gap-5 max-md:gap-4">
                            <div className="flex flex-col gap-[15px] max-xl:gap-5 max-md:gap-4">
                                <div className="flex gap-[5px] items-center">
                                    <Icon
                                        Svg={MapPin}
                                        width={isMobile ? 16 : 24}
                                        height={isMobile ? 16 : 24}
                                        className="fill-text-main shrink-0"
                                        aria-hidden="true"
                                    />
                                    <h4 className="text-[22px] max-md:text-base font-bold leading-none text-text-main">Владивосток, ул. Светланская 87в</h4>
                                </div>
                                <div className="flex gap-[15px] pl-[30px]">
                                    <div className="flex flex-col gap-[5px]">
                                        <p className="text-lg max-md:text-sm font-normal text-text-main leading-tight">Пн — Сб</p>
                                        <p className="text-lg max-md:text-sm font-normal text-text-main leading-tight">8:00-20:00</p>
                                    </div>
                                    <div className="flex flex-col gap-[5px]">
                                        <p className="text-lg max-md:text-sm font-normal text-text-main leading-tight">Вс</p>
                                        <p className="text-lg max-md:text-sm font-normal text-text-main leading-tight">10:00-14:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Навигация */}
                    <nav
                        className="flex flex-col gap-5 max-xl:hidden"
                        aria-label="Дополнительная навигация"
                    >
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="text-lg font-normal text-text-main leading-none"
                                aria-label={item.label}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Нижняя часть футера */}
                <div className="flex max-md:flex-col-reverse max-md:gap-2 md:justify-between" role="region" aria-label="Юридическая информация">
                    <p className="text-base max-md:text-sm font-normal text-text-secondary leading-none">
                        © {new Date().getFullYear()} ООО &quot;Нефролог&quot;. Все права защищены.
                    </p>
                    <div className="flex flex-col xl:items-end gap-2.5">
                        <Link
                            to={privacyPolicy}
                            rel="noopener noreferrer" target="_blank"
                            className="text-base max-md:text-sm font-normal text-text-secondary leading-none"
                            aria-label="Политика конфиденциальности персональных данных"
                        >
                            Политика конфиденциальности персональных данных
                        </Link>
                        <Link
                            to={privacyDataConsent}
                            rel="noopener noreferrer" target="_blank"
                            className="text-base max-md:text-sm font-normal text-text-secondary leading-none"
                            aria-label="Согласие на обработку персональных данных"
                        >
                            Согласие на обработку персональных данных
                        </Link>
                    </div>
                </div>
                <Link to={'https://d-extra.ru/'} className='w-full group'>
                    <p className='text-center text-text-secondary group-hover:text-text-primary transition font-p-lg mt-4'>Сделано в Dextra Webs</p>
                </Link>

            </footer>
        </Section>
    )
}