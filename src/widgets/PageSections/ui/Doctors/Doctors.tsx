import { Link, } from 'react-router-dom'
import { getRouteDoctors, } from '@/shared/const/router'
import { useDevice, } from '@/shared/hooks/useDevice'
import { doctorsList, } from '@/shared/mocks/doctors'
import { Button, } from '@/shared/ui/Button'
import { Section, } from '@/shared/ui/Section'
import { TextBanner, } from '@/shared/ui/TextBanner'
import { DoctorSelector, } from '@/widgets/DoctorSelector'

export const Doctors = () => {
    const { isMobile, } = useDevice()

    return (
        <Section
            SectionClassName="py-12 max-xl:p-8 max-md:py-6 max-md:px-2.5 bg-background"
            ContainerClassName="flex flex-col gap-8 max-md:gap-5"
            role="region"
            aria-labelledby="doctors-section-heading"
        >
            <TextBanner
                type="h2"
                variant="white"
                headerText="Врачи"
                subheaderText="Специалисты высшей квалификации с многолетним опытом работы"
                id="doctors-section-heading"
            />
            <DoctorSelector doctors={doctorsList} className='self-center'/>
            <Link
                to={getRouteDoctors()}
                className="self-center"
                aria-label="Посмотреть всех врачей клиники"
            >
                <Button
                    theme="blue"
                    text="Все врачи"
                    size={isMobile ? 'small' : 'large'}
                />
            </Link>
        </Section>
    )
}