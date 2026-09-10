import { Link, } from 'react-router-dom'
import { getRouteServices, } from '@/shared/const/router'
import { useDevice, } from '@/shared/hooks/useDevice'
import { serviceList, } from '@/shared/mocks/services'
import { Button, } from '@/shared/ui/Button'
import { Section, } from '@/shared/ui/Section'
import { TextBanner, } from '@/shared/ui/TextBanner'
import { ServiceCard, } from '@/widgets/ServiceCard'

export const Services = () => {
    const { isMobile, } = useDevice()

    return (
        <Section
            SectionClassName="py-12 max-xl:p-8 max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col gap-8 max-md:gap-5"
            role="region"
            aria-labelledby="services-section-heading"
        >
            <TextBanner
                type="h2"
                variant="white"
                headerText="Услуги"
                subheaderText="Мы предоставляем услуги гемодиализа с индивидуальным подходом, современными технологиями и вниманием к каждому пациенту"
                id="services-section-heading"
            />
            <div aria-label="Список услуг клиники" className='flex max-xl:flex-col gap-5 max-md:gap-2.5 items-center'>
                {serviceList.map(service => (
                    <ServiceCard data={service} className="max-w-none"/>
                ))}
            </div>
            <Link
                to={getRouteServices()}
                className="self-center"
                aria-label="Посмотреть все услуги клиники"
            >
                <Button
                    theme="blue"
                    text="Все услуги"
                    size={isMobile ? 'small' : 'large'}
                    className="self-center"
                />
            </Link>
        </Section>
    )
}