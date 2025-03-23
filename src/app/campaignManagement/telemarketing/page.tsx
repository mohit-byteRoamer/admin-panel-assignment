import Button from "@/components/buttons";
import AddNote from "@/components/cards/add-note";
import UserSocialCard from "@/components/cards/user-social-card";
import ViewEditCard from "@/components/cards/view-edit-card";
import ScrollList from "@/components/scrolll-list";
import Table from "@/components/table";
import { COLOR_MULBERRY_PINK, COLOR_WHITE, DEEP_TEAL, OLIVE_GREEN, OLIVE_GREEN_LIGHT } from "@/constants/colors";
import { sampleData, userDetails, userDetailsList } from "@/constants/dummy-data/global-dummy-data";
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
        <Button bgColor={OLIVE_GREEN_LIGHT} textColor={OLIVE_GREEN}>
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
        <div className="p-1.5 bg-deep-teal-medium rounded-md" >
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
    <div className="mt-4 grid grid-cols-[380px_340px_1fr] gap-6">
      <div className="flex flex-col gap-4">
        <UserSocialCard userDetails={userDetails} userName="Mr. John Key" userId="121212" />
        <ViewEditCard title={"Self Descriptions"} isEdit={true} />
      </div>
      <ScrollList list={userDetailsList} />
      <div className="flex flex-col gap-4">
        <AddNote />
        <ViewEditCard title={"Interest"}  isEdit={true} />
        <ViewEditCard title={"Match Notes"}   />
      </div>
    </div>



  </div>
}
