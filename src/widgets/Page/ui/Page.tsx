import { ReactNode, useEffect, } from 'react'
import { useDevice, } from '@/shared/hooks/useDevice';
import { useScrollDetector, } from '@/shared/hooks/useScrollDetector';
import { Footer, } from '@/widgets/Footer'
import { Header, } from '@/widgets/Header'

type PageProps = {
    children: ReactNode;
}
export const Page = (props: PageProps) => {
    const { children, } = props

    const { isDesktop, } = useDevice()
    const isScrolled = useScrollDetector(170)

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <div className="flex flex-col items-center h-screen">
            <Header />
            <div className={`flex flex-col w-full grow ${isDesktop && isScrolled? 'pt-10': 'pt-0'} max-xl:pt-[190px] max-md:pt-[89px]`}>{children}</div>
            <Footer />
        </div>
    )
}