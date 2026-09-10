import { Controller, useForm, useFormState } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { TextareaInput } from "@/shared/ui/TextareaInput";
import { TextInput } from "@/shared/ui/TextInput";
import { useDevice } from "@/shared/hooks/useDevice";
import { Modal, ModalProps } from "@/shared/ui/Modal";
import { useModal } from "@/shared/hooks/useModal";

type SuccessModalProps = Omit<ModalProps, 'children'>

const SuccessModal = (props: SuccessModalProps) => {
    const { isMobile, } = useDevice()

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size={isMobile ? 'sm' : 'xl'} closeOnOutsideClick>
            <div className="flex flex-col gap-2.5">
                <p className="font-p-lg text-text-main text-center">Сообщение успешно отправлено!<br /> Мы свяжемся с вами в ближайшее время</p>
                <Button theme="blue" text="Закрыть" onClick={props.onClose} />
            </div>
        </Modal>
    )
}

type FormValues = {
    name: string;
    email: string;
    message: string;
    agree: boolean;
};

const checkboxLabel =
    "Нажимая «Отправить», я соглашаюсь с Политикой конфиденциальности и даю согласие на обработку моих данных в соответствии с ФЗ №152-ФЗ и Положением о защите и обработке персональных данных.";

export const FeedbackForm = () => {
    const { isMobile, } = useDevice()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
        reset,
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        await emailjs.send(
            __EMAILJS_SERVICE_ID__!,
            __EMAILJS_TEMPLATE_ID__!,
            {
                name: data.name,
                email: data.email,
                message: data.message,
            },
            __EMAILJS_PUBLIC_KEY__!
        )
            .then(() => {
                messageModal.open();
                reset();
            })
            .catch((err) => {
                console.error("Ошибка отправки:", err);
            })
    };

    const messageModal = useModal()

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-7.5 max-md:p-4 gap-7.5 max-md:gap-4 bg-primary-light max-w-[754px] rounded-[20px]"
        >
            <div className="flex flex-col gap-2.5">
                <TextInput
                    label="Ваше имя"
                    required
                    {...register("name", { required: "Введите ваше имя" })}
                    error={errors.name?.message}
                />

                <TextInput
                    label="Ваш E-mail"
                    required
                    type="email"
                    {...register("email", {
                        required: "Введите E-mail",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Введите корректный E-mail",
                        },
                    })}
                    error={errors.email?.message}
                />

                <TextareaInput
                    label="Сообщение"
                    required
                    {...register("message", { required: "Введите сообщение" })}
                    error={errors.message?.message}
                />

                <Controller
                    name="agree"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Checkbox
                            label={checkboxLabel}
                            required
                            className="items-start"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                        />
                    )}
                />
                {errors.agree && (
                    <p className="font-p-sm text-red-500">
                        Нужно согласиться с политикой конфиденциальности
                    </p>
                )}
            </div>

            <Button
                size={isMobile ? 'regular' : 'large'}
                theme="blue"
                text={isSubmitting ? "Отправка..." : "Отправить"}
                className="self-center"
                type="submit"
                disabled={isSubmitting}
            />

            <SuccessModal isOpen={messageModal.show} onClose={messageModal.close} />
        </form>
    );
};
