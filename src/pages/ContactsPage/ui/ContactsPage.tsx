import { Section, } from '@/shared/ui/Section'
import { TextBanner, } from '@/shared/ui/TextBanner'
import { Page, } from '@/widgets/Page'
import { ContactsInfo, } from '@/widgets/PageSections'

const ContactsPage = () => {
    return (
        <Page>
            <Section
                SectionClassName="py-12 max-xl:px-8 max-md:py-8 max-md:px-2.5 bg-background"
                role="region"
                aria-labelledby="contacts-heading"
            >
                <TextBanner
                    type="h1"
                    variant="light"
                    headerText="Контакты"
                    subheaderText="Как с нами связаться и где нас найти"
                    id="contacts-heading"
                />
            </Section>
            <ContactsInfo />
        </Page>
    )
}
export default ContactsPage