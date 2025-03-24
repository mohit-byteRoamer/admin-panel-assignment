import { DEEP_TEAL } from "@/constants/colors"
import { PlusCircle } from "@deemlol/next-icons"

const AddNote = () => {
    return (
        <div className="bg-white rounded-md">
            <div className="p-2 border-b flex justify-between px-3">
                <span className="text-base font-semibold">John Notes</span>
                <div className="w-6 h-6 flex items-center justify-center rounded-md p-1 bg-deep-teal-light">
                    <PlusCircle size={16} color={DEEP_TEAL} />
                </div>
            </div>
            <div className="p-2">
                <div className="border-b py-1">
                    <div className="text-base"><span className="text-gray-500 text-base tracking-wide">EMMA:</span> 8/10/24 : Tue, 11:04 AM</div>
                    <div className="text-base"><span className="text-gray-500 text-base tracking-wide">Sent SMS:</span> No Response pending</div>
                </div>
                <div className="border-b py-1">
                    <div className="text-base"><span className="text-gray-500 text-base tracking-wide">EMMA:</span> 8/10/24 : Tue, 11:04 AM</div>
                    <div className="text-base"><span className="text-gray-500 text-base tracking-wide">Postpone:</span> Intro with Pri as he is travelling and be
                        back 17th oct</div>
                </div>
                <div className="py-1">
                    <div className="text-base"><span className="text-gray-500 text-base tracking-wide">EMMA:</span> 8/10/24 : Tue, 11:04 AM</div>
                    <div className="text-base"><span className="text-gray-500 text-base tracking-wide">Sent SMS:</span> Hi Mark, we sent you an introduction recently
                        and we've not heard from you. Would you kindly give
                        me a call on 9017 8400? With love, Emma @Vital
                        partners</div>
                </div>
            </div>
        </div>
    )
}
export default AddNote