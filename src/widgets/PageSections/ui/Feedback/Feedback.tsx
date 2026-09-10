import { FeedbackForm } from "@/features/FeedbackForm"
import { Section } from "@/shared/ui/Section"
import { TextBanner } from "@/shared/ui/TextBanner"

export const Feedback = () => {
    return (
        <Section
            SectionClassName="py-12 max-xl:p-[34px] max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col gap-8 max-md:gap-5 items-center"
        >
            <TextBanner
                type="h2"
                variant="white"
                headerText="Форма обратной связи"
            />
            {/* <Accordion data={FAQData} /> */}
            <FeedbackForm />
        </Section>
    )
}