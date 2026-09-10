import { doctorsList, } from '@/shared/mocks/doctors'
import { Section, } from '@/shared/ui/Section'
import { DoctorCard, } from '@/widgets/DoctorCard'


export const DoctorList = () => {

    return (
        <Section
            SectionClassName="py-5 max-xl:p-8 max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col gap-[25px] max-xl:gap-5 max-md:gap-3.5"
            role="region"
            aria-label="Список врачей"
        >
            <div
                className="grid grid-cols-2 max-xl:grid-cols-1 gap-8 max-xl:gap-5 items-start"
                role="list"
                aria-label="Список врачей"
            >
                {doctorsList.map((doctor, index) => (
                    <div
                        key={index}
                        className="h-full flex justify-center"
                        role="listitem"
                    >
                        <DoctorCard 
                            data={doctor} 
                            variant="standalone" 
                            className="max-w-full"
                        />
                    </div>
                ))}
            </div>
        </Section>
    )
}