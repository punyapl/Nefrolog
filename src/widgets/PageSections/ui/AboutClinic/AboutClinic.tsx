import { clinicFacts, } from '@/shared/mocks/clinicFacts'
import { IconCard, } from '@/shared/ui/IconCard'
import { Section, } from '@/shared/ui/Section'
import { TextBanner, } from '@/shared/ui/TextBanner'

export const AboutClinic = () => {
    
    return (
        <Section
            SectionClassName="py-12 max-xl:p-8 max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col gap-10 max-md:gap-5"
            role="region"
            aria-labelledby="about-clinic-heading"
        >
            <TextBanner
                type="h2"
                variant="white"
                headerText="О сети диализных центров «Спасение»"
                subheaderText="Методы заместительной почечной терапии в сети центров «СПАСЕНИЕ» соответствуют мировым стандартам и российскому законодательству, помогая пациентам, жизнь которых зависит от регулярного диализа"
                id="about-clinic-heading"
            />

            <div
                className="grid max-md:flex max-md:flex-col grid-cols-3 max-xl:grid-cols-2 
                    gap-10 max-xl:gap-7.5 max-md:gap-5 justify-center 
                    max-xl:max-w-[704px] max-xl:self-center"
                role="list"
                aria-label="Факты о клинике"
            >
                {clinicFacts.map((fact, index) => (
                    <IconCard
                        key={index}
                        icon={fact.icon}
                        titleText={fact.titleText}
                        paragraphText={fact.paragraphText}
                        role="listitem"
                    />
                ))}
            </div>
        </Section>
    )
}