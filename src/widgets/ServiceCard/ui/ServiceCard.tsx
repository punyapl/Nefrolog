import { Service, } from '@/entities/Service/types'

type ServiceCardProps = {
    data: Service;
    className?: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
    const { data, className = '', } = props

    return (
        <div
            className={`
                flex flex-col justify-between bg-primary-light 
                rounded-[20px] p-7 max-md:p-4 
                w-full min-w-[300px] max-w-[630px] 
                h-min min-h-[167px] max-h-[320px]
                ${className}
                `}
        >
            <div className="flex flex-col w-full gap-3">
                <div className='flex flex-col w-full gap-2 max-md:gap-3'>
                    <h4 className="font-h4 text-text-primary uppercase max-h-24 max-md:max-h-[60px] overflow-hidden line-clamp-2">{data.name}</h4>
                    <p className="font-p-md max-md:text-xs text-text-main max-h-[38px] max-md:max-h-[50px] overflow-hidden line-clamp-2 max-md:line-clamp-3">{data.description}</p>
                </div>
                <p className="font-p-lg max-md:text-sm text-text-secondary overflow-hidden">по полису ОМС — абсолютно бесплатно для пациента</p>
            </div>
        </div>
    )

}