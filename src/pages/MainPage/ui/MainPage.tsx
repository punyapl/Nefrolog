import { FeedbackForm } from '@/features/FeedbackForm'
import { Page, } from '@/widgets/Page'
import { AboutBanner, AboutClinic, Doctors, FAQ, Feedback, Services, } from '@/widgets/PageSections'

const MainPage = () => {
    return (
        <Page>
            <AboutBanner />
            <AboutClinic />
            <Doctors />
            <Services />
            {/* <FAQ /> */}
            <Feedback />
        </Page>
    )
}

export default MainPage