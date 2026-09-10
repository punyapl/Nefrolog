import { Doctor, } from '@/entities/Doctor/types';

type DoctorCardProps = {
    data: Doctor;
    variant?: 'standalone' | 'sliderdesc';
    className?: string;
}

const FieldRow = (props: { label: string; value?: string | number | null; labelMaxWidth?: string }) => {
    const { label, value, labelMaxWidth = 'max-w-[340px]', } = props;

    if (value === undefined || value === null || value === '') return null;

    return (
        <div className="flex max-md:flex-col gap-2.5 max-md:gap-1">
            <p className={`font-p-xl max-md:text-sm text-text-main ${labelMaxWidth}`}>{label}</p>
            <p className="font-p-xl max-md:text-xs text-text-main">{value}</p>
        </div>
    );
};

export const DoctorCard = (props: DoctorCardProps) => {
    const {
        data,
        variant = 'sliderdesc',
        className = '',
    } = props;

    const fields = [
        ['Наименование учебного заведения', 'educationInstitutionName',],
        ['Вид образования', 'educationType',],
        ['Год окончания ВУЗа', 'educationGraduationYear',],
        ['Специальность', 'speciality',],
        ['Подготовка или переподготовка по специальности', 'retraining',],
        ['Наименование ВУЗа', 'retrainingInstitutionName',],
        ['Год окончания', 'retrainingGraduationYear',],
        ['Дата получения сертификата', 'certificateObtainingDate',],
        ['Срок окончания', 'certificateEndDate',],
    ] as const;

    const rows = fields.map(([label, key,]) => ({
        label,
        value: (data as any)[key],
        key,
    }));

    const baseInner = (
        <>
            <h4 className="font-h4 text-text-primary">{data.name}</h4>
            <p className="font-sub text-text-main">{data.qualification}</p>

            <div className="flex flex-col gap-2 max-md:gap-2.5 w-full">
                {rows.map((r) => (
                    <FieldRow key={String(r.key)} label={r.label} value={r.value} />
                ))}
            </div>
        </>
    );

    switch (variant) {
        case 'sliderdesc':
            return (
                <div
                    className={`bg-primary-light flex flex-col justify-center gap-2.5 max-md:gap-2 rounded-[20px]
            py-5 max-md:py-3 px-10 max-md:p-4 w-full max-md:min-w-[284px] h-full ${className}`}
                >
                    {baseInner}
                </div>
            );
        case 'standalone':
            return (
                <div
                    className={`bg-primary-light flex flex-col justify-center gap-2.5 max-md:gap-2 rounded-[20px]
            p-5 max-md:p-4 w-full max-w-[620px] max-md:min-w-[260px] h-full ${className}`}
                >
                    {baseInner}
                </div>
            );
        default:
            console.warn(`Unknown variant: ${variant}`);
            return null;
    }
};
