import { Section, } from '@/shared/ui/Section'
import { TextBanner, } from '@/shared/ui/TextBanner'
import { Page, } from '@/widgets/Page'
import { DoctorList, } from '@/widgets/PageSections'

const DoctorsPage = () => {
    return (
        <Page>
            <Section
                SectionClassName="py-12 max-xl:px-8 max-md:py-8 max-md:px-2.5 bg-background"
                role="region"
                aria-labelledby="doctors-heading"
            >
                <TextBanner
                    type="h1"
                    variant="light"
                    headerText="Наши врачи"
                    subheaderText="Команда опытных специалистов с многолетней практикой"
                    id="doctors-heading"
                />
            </Section>
            <DoctorList />
        </Page>
    )
}
export default DoctorsPage