import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../utils"

const selectorVariants = cva(
    "border-2 border-[#e3e8ee] pb-[1px] outline-offset-[-2px] tracking-[0.01em] text-[14px] font-[Rubik] h-[48px] px-[22px] appearance-none bg-no-repeat bg-arrow bg-right border-r-[22px] border-white outline outline-[1px] outline-[#e3e8ee]",
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


interface ButtonProps extends React.HtmlHTMLAttributes<HTMLSelectElement>,
VariantProps<typeof selectorVariants> {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<ButtonProps> = ({className, variant, ...props}) => {
    return <select className={cn(selectorVariants({variant, className}))} {...props} />
}

export { Select, selectorVariants}