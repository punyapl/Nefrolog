import { AriaRole, FC, type SVGProps, } from 'react'
import { useDevice, } from '@/shared/hooks/useDevice';
import { Icon, } from '../Icon'

type IconCardProps = {
    icon: FC<SVGProps<SVGSVGElement>>;
    titleText: string;
    paragraphText: string;
    role?: AriaRole;
    iconWidth?:number;
}

export const IconCard = (props: IconCardProps) => {
    const { icon, titleText, paragraphText, iconWidth, } = props;
    const { isMobile, isTablet, } = useDevice()

    return (
        <div
            className="flex flex-col items-center gap-6 max-md:gap-2.5"
        >
            <div className='bg-primary-light rounded-full p-3 max-md:p-[9px]'>
                <Icon
                    Svg={icon}
                    width={iconWidth? iconWidth : (isMobile ? 30 : 40)}
                    height={isMobile ? 30 : 40}
                    className="fill-primary"
                />
            </div>
            <div className="flex flex-col gap-4 max-md:gap-2">
                <p className="font-h4 text-center text-text-main">{titleText}</p>
                <p className="font-p-md text-center text-text-secondary">{paragraphText}</p>
            </div>
        </div>
    )
}