import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../utils"

const selectorVariants = cva(
    "border-[1px] border-[#e3e8ee] px-[22px] h-[48px] focus:outline-none",
    {
        variants: {
            variant: {
                default: 'w-[500px]',
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)


interface ButtonProps extends React.HtmlHTMLAttributes<HTMLInputElement>,
VariantProps<typeof selectorVariants> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Input: React.FC<ButtonProps> = ({className, variant, ...props}) => {
    return <input className={cn(selectorVariants({variant, className}))} {...props} />
}

export { Input, selectorVariants}