import { useState, useEffect, forwardRef, } from 'react';
import MagnigyingGlass from '@/shared/assets/icons/MagnifyingGlass.svg'
import XMark from '@/shared/assets/icons/XMark.svg'
import { Button, } from '../Button';

// interface TextInputProps {
//     label: string;
//     required?: boolean;
//     placeholder?: string;
//     disabled?: boolean;
//     type?: string;
//     name?: string;
//     id?: string;
//     value?: string;
//     defaultValue?: string;
//     onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
//     error?: string;
//     className?: string;
// }

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ label, error, ...props }, ref) => {
        // const {
        //     label,
        //     required,
        //     placeholder,
        //     disabled,
        //     type = 'text',
        //     name,
        //     id,
        //     value,
        //     defaultValue,
        //     onChange,
        //     error,
        //     className,
        //     // searchButton,
        //     // onRemoveButtonClick,
        //     // onSearchButtonClick,
        // } = props;

        const [text, setText,] = useState<string>(String(props.value ?? props.defaultValue ?? ''));

        useEffect(() => {
            if (props.value !== undefined) {
                setText(String(props.value));
            }
        }, [props.value,]);

        const hasText = text.length > 0;

        return (
            <div className={`flex flex-col gap-2.5 ${props.className}`}>
                <label htmlFor={props.id}>
                    {label}{props.required && ' *'}
                </label>
                <div className="flex grow gap-2.5">
                    <input
                        className="min-h-[40px] grow min-w-0 px-5 text-base border 
                        border-border rounded-[10px] bg-background 
                        placeholder:text-text-secondary"
                        ref={ref}
                        id={props.id}
                        name={props.name}
                        type={props.type}
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                        value={props.value}
                        defaultValue={props.defaultValue}
                        onChange={e => {
                            const v = e.target.value;
                            setText(v);
                            props.onChange?.(e);
                        }}
                    />
                </div>
                {error && <span className="font-p-sm text-red-500">{error}</span>}
            </div>
        )
    }
)

TextInput.displayName = "TextInput";