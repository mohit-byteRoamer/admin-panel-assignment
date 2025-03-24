import Button from "@/components/buttons";
import AddNote from "@/components/cards/add-note";
import FlagFollow from "@/components/cards/flag-follow";
import UserSocialCard from "@/components/cards/user-social-card";
import ViewEditCard from "@/components/cards/view-edit-card";
import ScrollList from "@/components/scrolll-list";
import Table from "@/components/table";
import { APP_CONSTANTS } from "@/constants/app-constants";
import { DEEP_TEAL } from "@/constants/colors";
import { SAMPLE_DATA, USER_DETAILS, USER_DETAILS_LIST } from "@/constants/dummy-data/global-dummy-data";
import { COLUMNS } from "@/constants/dummy-data/tsx-dummy-data";

import { ChevronLeft, ThumbsUp } from "@deemlol/next-icons";



export default function TelemarketingPage() {
  return <div className="mt-3 w-full">
    <h1 className="text-xl font-bold">{APP_CONSTANTS.TELEMARKETING}</h1>

    <div className="w-full flex justify-between bg-gray-light p-2 border border-white rounded-lg">
      <div className="flex items-center ">
        <ChevronLeft size={24} color="#000000" />
        <span className="text-base">Mr John Smith</span>
      </div>
      <div className="flex gap-2">
        <Button className="!font-semibold !bg-olive-green-light !text-olive-green !border-none">
          {APP_CONSTANTS.PARTNER_DETAILS}
        </Button>
        <Button className="!font-semibold !bg-mulberry-pink !text-white !border-none">
          {APP_CONSTANTS.CLIENT_DETAILS}


        </Button>
      </div>
    </div>

    <div className="w-full flex justify-between p-2 mt-2">
      <div className="flex items-end gap-36">
        <span className="text-base text-deep-teal font-medium">{APP_CONSTANTS.NO_ONE_YET_DES_SUCC}</span>
        <span className="text-base text-deep-teal font-medium">{APP_CONSTANTS.SEARCH_DATE}: Fri, Nov 20, 2024</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-1.5 bg-deep-teal-medium rounded-md" >
          <ThumbsUp size={22} color={DEEP_TEAL} />
        </div>
        <Button className="!bg-deep-teal !text-white !py-4 !border-none">
          {APP_CONSTANTS.SEARCH}
        </Button>
      </div>
    </div>
    <div className="mt-2">
      <Table columns={COLUMNS} data={SAMPLE_DATA} key={1} pagination={false} />
    </div>
    <div className="mt-4 grid grid-cols-[380px_340px_1fr] gap-6">
      <div className="flex flex-col gap-4">
        <UserSocialCard USER_DETAILS={USER_DETAILS} userName="Mr. John Key" userId="121212" />
        <ViewEditCard title={"Self Descriptions"} isEdit={true} />
      </div>
      <ScrollList list={USER_DETAILS_LIST} />
      <div className="flex flex-col gap-4">
        <FlagFollow title={APP_CONSTANTS.CONTACT_AFTER} />
        <AddNote />
        <ViewEditCard title={APP_CONSTANTS.INTEREST} isEdit={true} />
        <ViewEditCard title={APP_CONSTANTS.MATCH_NOTES} />
      </div>
    </div>
  </div>
}
