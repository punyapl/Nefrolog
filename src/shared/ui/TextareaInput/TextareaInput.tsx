import { useState, useEffect, forwardRef, } from "react";

// type TextareaInputProps = {
//     label: string;
//     required?: boolean;
//     placeholder?: string;
//     disabled?: boolean;
//     name?: string;
//     id?: string;
//     value?: string;
//     defaultValue?: string;
//     onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
//     error?: string;
//     className?: string;
//     rows?: number;
// }

type TextareaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    error?: string;
};

export const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
    ({ label, error, ...props }, ref) => {
        // const {
        //     label,
        //     required,
        //     placeholder,
        //     disabled,
        //     name,
        //     id,
        //     value,
        //     defaultValue,
        //     onChange,
        //     error,
        //     className,
        // } = props;

        const [text, setText,] = useState<string>(String(props.value ?? props.defaultValue ?? ''));

        useEffect(() => {
            if (props.value !== undefined) {
                setText(String(props.value));
            }
        }, [props.value,]);

        return (
            <div className={`flex flex-col gap-2.5 ${props.className}`}>
                <label htmlFor={props.id}>
                    {label}{props.required && ' *'}
                </label>
                <textarea
                    className="resize-y py-2.5 min-h-[104px] grow min-w-0 px-5 text-base border
                    border-border rounded-[10px] bg-background 
                    placeholder:text-text-secondary"
                    ref={ref}
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    rows={props.rows}
                    value={props.value}
                    defaultValue={props.defaultValue}
                    onChange={e => {
                        const v = e.target.value;
                        setText(v);
                        props.onChange?.(e);
                    }}
                />
                {error && <span className="font-p-sm text-red-500">{error}</span>}
            </div>
        )
    }
)