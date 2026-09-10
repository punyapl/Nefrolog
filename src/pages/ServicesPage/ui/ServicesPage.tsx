import { Section, } from '@/shared/ui/Section'
import { TextBanner, } from '@/shared/ui/TextBanner'
import { Page, } from '@/widgets/Page'
import { ServiceList, } from '@/widgets/PageSections'

const ServicesPage = () => {
    return (
        <Page>
            <Section
                SectionClassName="py-12 max-xl:px-8 max-md:py-8 max-md:px-2.5 bg-background"
                role="region"
                aria-labelledby="services-heading"
            >
                <TextBanner
                    type="h1"
                    variant="light"
                    headerText="Услуги клиники"
                    subheaderText="Полный спектр медицинских услуг высочайшего качества"
                    id="services-heading"
                />
            </Section>
            <ServiceList />
        </Page>
    )
}
export default ServicesPage