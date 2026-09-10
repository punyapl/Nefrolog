import { Section, } from '@/shared/ui/Section'
import { TextBanner, } from '@/shared/ui/TextBanner'
import { Page, } from '@/widgets/Page'
import { DocumentList, } from '@/widgets/PageSections'

const DocumentsPage = () => {
    return (
        <Page>
            <Section
                SectionClassName="py-12 max-xl:px-8 max-md:py-8 max-md:px-2.5 bg-background"
                role="region"
                aria-labelledby="documents-heading"
            >
                <TextBanner
                    type="h1"
                    variant="light"
                    headerText="Нормативные документы"
                    subheaderText="Документы, регламентирующие деятельность клиники"
                    id="documents-heading"
                />
            </Section>
            <DocumentList />
        </Page>
    )
}
export default DocumentsPage