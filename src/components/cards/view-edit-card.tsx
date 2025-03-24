import { DEEP_TEAL } from "@/constants/colors"
import { Edit2 } from "@deemlol/next-icons"

export interface VIEW_EDIT_CARD_PROPS_TYPES {
    title: string
    isEdit?: boolean,
}

const ViewEditCard = ({ isEdit, title }: VIEW_EDIT_CARD_PROPS_TYPES) => {
    return (
        <div className="bg-white rounded-md">
            <div className="p-2 border-b flex justify-between px-3">
                <span className="text-base font-semibold">{title}</span>
                {isEdit && <div className="w-6 h-6 flex items-center justify-center rounded-md p-1 bg-deep-teal-light">
                    <Edit2 size={16} color={DEEP_TEAL} />
                </div>}
            </div>
            <div className="p-2 text-sm text-gray-500">
                Lorem ipsum dolor sit am consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam. Lorem ipsum dolor sit am consectetur
                adipiscing elit, eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
                am consectetur adipiscing elit, eiusmod tempor incididunt ut.
            </div>
        </div>
    )
}
export default ViewEditCard