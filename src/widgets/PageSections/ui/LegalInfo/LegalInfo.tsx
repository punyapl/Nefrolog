import { fullLegalInformation, } from "@/shared/mocks/fullLegalInformation"
import { Section, } from "@/shared/ui/Section"

export const LegalInfo = () => {
    
    return (
        <Section
            SectionClassName="py-12 max-xl:p-[34px] max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col items-center gap-16 max-md:gap-10"
            role="region"
            aria-label="Юридические данные"
        >
            <div className="flex flex-col gap-5 max-md:gap-3 w-full">
                {
                    fullLegalInformation.map(row => (
                        <div className="flex max-md:flex-col gap-5 max-md:gap-1.5 w-full">
                            {
                                row.label &&
                                <h6 className="font-h6 text-text-primary text-nowrap max-md:whitespace-normal max-md:break-words ">
                                    {row.label}
                                </h6>
                            }
                            <p className="font-p-xl max-md:text-sm text-text-main text-wrap">
                                {row.value}
                            </p>
                        </div>
                    ))
                }
            </div>
        </Section>
    )
}
