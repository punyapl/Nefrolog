import { useState, useEffect, useMemo, } from 'react';
import { Doctor, } from '@/entities/Doctor/types';
import DoctorFemale from '@/shared/assets/icons/DoctorFemale.svg'
import DoctorMale from '@/shared/assets/icons/DoctorMale.svg'
import { useDevice, } from '@/shared/hooks/useDevice';
import { Icon, } from '@/shared/ui/Icon';
import { Slider, } from '@/shared/ui/Slider';
import { DoctorCard, } from '@/widgets/DoctorCard';

type DoctorSelectButtonProps = {
    data: Doctor;
    onClick?: () => void;
    active?: boolean;
};

const DoctorSelectButton = (props: DoctorSelectButtonProps) => {
    const { data, onClick, active, } = props;
    const { isMobile, } = useDevice()

    return (
        <button
            type="button"
            onClick={(e) => {
                e.stopPropagation();
                onClick?.();
            }}
            className={`w-full min-h-[140px] max-md:min-h-31 text-left flex items-center gap-3 max-md:gap-2.5 p-2.5 
                rounded-lg border transition-shadow cursor-pointer pointer-events-auto
                ${active ? 'bg-primary-light shadow-md border-transparent' : 'bg-background border-border hover:shadow-sm'}
            `}
            aria-pressed={!!active}
        >
            <div className={`flex-shrink-0 w-[120px] max-md:w-26 aspect-square rounded-[10px] 
                bg-background ${!active && 'outline-2 outline-border'} 
                flex items-end justify-center overflow-hidden`}
            >
                <Icon Svg={data.sex == 'male' ? DoctorMale : DoctorFemale} height={isMobile ? 100 : 115} width={isMobile ? 100 : 115} />
            </div>

            <div className="flex flex-col px-[15px] max-md:px-0 gap-2.5 max-md:gap-1">
                <span className="font-p-xl text-text-main line-clamp-3 max-w-[142px]">{data.name}</span>
                <span className="text-p-lg text-text-main truncate max-w-[142px] max-md:max-w-[150px]">{data.qualification}</span>
            </div>
        </button>
    );
};

type DoctorSelectorProps = {
    doctors: Doctor[];
    initialSelectedId?: Doctor['id'];
    onSelect?: (doctor: Doctor) => void;
    className?: string;
};

export const DoctorSelector = (props: DoctorSelectorProps) => {
    const { doctors, initialSelectedId, onSelect, className = '', } = props;

    const [selectedId, setSelectedId,] = useState<Doctor['id'] | undefined>(
        initialSelectedId ?? doctors[0]?.id
    );

    // следим за изменением списка врачей — если выбранный id исчез, берем первого
    useEffect(() => {
        if (!doctors || doctors.length === 0) {
            setSelectedId(undefined);
            return;
        }

        if (selectedId == null) {
            setSelectedId(doctors[0].id);
            return;
        }

        const exists = doctors.some((d) => d.id === selectedId);
        if (!exists) {
            setSelectedId(doctors[0].id);
        }
    }, [doctors, selectedId,]);

    // вызываем onSelect при изменении выбранного врача
    useEffect(() => {
        const doc = doctors.find((d) => d.id === selectedId);
        if (doc) {
            onSelect?.(doc);
        }
    }, [selectedId, doctors, onSelect,]);

    const selectedDoctor = useMemo(
        () => doctors.find((d) => d.id === selectedId) ?? doctors[0],
        [doctors, selectedId,]
    );

    const handleSelect = (id: Doctor['id']) => {
        setSelectedId(id);
    };

    return (
        <div className={`flex max-xl:flex-col gap-5 items-stretch max-w-[1070px] w-full ${className}`}>
            {/* LEFT: desktop vertical list */}
            <div className="hidden xl:flex flex-col gap-4 min-w-[350px] max-w-[350px] max-h-[460px] scrollbar-primary pointer-events-auto z-10">
                {doctors.map((d) => (
                    <div key={d.id}>
                        <DoctorSelectButton
                            data={d}
                            active={d.id === selectedId}
                            onClick={() => handleSelect(d.id)}
                        />
                    </div>
                )).slice(0, 3)}
            </div>

            {/* LEFT (mobile): horizontal slider — передаём в Slider сами кнопки (без вложенных кнопок) */}
            <div className="xl:hidden w-full">
                <Slider
                    items={doctors.map((d) => (
                        <div
                            key={d.id}
                            className="w-[350px] max-md:w-[300px]"
                            role="listitem"
                        >
                            <DoctorSelectButton
                                data={d}
                                active={d.id === selectedId}
                                onClick={() => handleSelect(d.id)}
                            />
                        </div>
                    ))}
                    role="list"
                    className="max-md:px-0"
                />
            </div>

            {/* RIGHT: detailed card */}
            <div className="flex-1 flex items-stretch max-xl:items-center">
                {selectedDoctor && <DoctorCard data={selectedDoctor} variant="sliderdesc" className='w-full' />}
            </div>
        </div>
    );
};
