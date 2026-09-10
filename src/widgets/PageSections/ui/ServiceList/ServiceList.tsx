import { serviceList, } from '@/shared/mocks/services'
import { Section, } from '@/shared/ui/Section'
import { ServiceCard, } from '@/widgets/ServiceCard'

export const ServiceList = () => {

    return (
        <Section
            SectionClassName="py-5 max-xl:p-8 max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col gap-[25px] max-xl:gap-5 max-md:gap-3.5"
            role="region"
            aria-label="Список услуг"
        >
            <div
                className="grid grid-cols-2 max-xl:grid-cols-1 gap-5 items-start"
                role="list"
                aria-label="Список услуг"
            >
                {serviceList.map((service, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                        role="listitem"
                    >
                        <ServiceCard
                            data={service}
                            className='max-w-full'
                        />
                    </div>
                ))}
            </div>
        </Section>
    )
}