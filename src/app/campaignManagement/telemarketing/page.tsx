import Button from "@/components/buttons";
import UserSocialCard from "@/components/cards/user-social-card";
import Table from "@/components/table";
import { COLOR_MULBERRY_PINK, COLOR_WHITE, DEEP_TEAL, OLIVE_GREEN, OLIVE_GREEN_LIGHT } from "@/constants/colors";
import { sampleData, userDetails } from "@/constants/dummy-data/global-dummy-data";
import { columns } from "@/constants/dummy-data/tsx-dummy-data";
import { ChevronLeft, ThumbsUp } from "@deemlol/next-icons";



export default function TelemarketingPage() {
  return <div className="mt-3 w-full">
    <h1 className="text-xl font-bold">Telemarketing</h1>

    <div className="w-full flex justify-between bg-gray-light p-2 border border-white rounded-lg">
      <div className="flex items-center ">
        <ChevronLeft size={24} color="#000000" />
        <span className="text-base">Mr John Smith</span>
      </div>
      <div className="flex gap-2">
        <Button bgColor={OLIVE_GREEN_LIGHT} textColor={OLIVE_GREEN} style="font-semibold">
          Client Details
        </Button>
        <Button bgColor={COLOR_MULBERRY_PINK} textColor={COLOR_WHITE}>
          Partner Details
        </Button>
      </div>
    </div>

    <div className="w-full flex justify-between p-2 mt-2">
      <div className="flex items-end gap-36">
        <span className="text-base text-deep-teal font-medium">No one yet described successfully</span>
        <span className="text-base text-deep-teal font-medium">Search date: Fri, Nov 20, 2024</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-1.5 bg-deep-teal-light rounded-md" >
          <ThumbsUp size={22} color={DEEP_TEAL} />
        </div>
        <Button bgColor={DEEP_TEAL} textColor={COLOR_WHITE}>
          Search
        </Button>
      </div>
    </div>
    <div className="mt-2">
      <Table columns={columns} data={sampleData} key={1} pagination={false} />
    </div>
    <div className="mt-4">
      <UserSocialCard userDetails={userDetails} userName="Mr. John Key" userId="121212" />
    </div>

  </div>
}
