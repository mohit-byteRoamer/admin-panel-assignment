import { AirPlane, Bell, ChevronDown, Folder, House, Layers, Mail, MessageCircle, User, Users, ChevronLeft, ThumbsUp } from "@deemlol/next-icons";
import { COLOR_WHITE } from "./colors";
export const getIcon = (name: string, size = 18, color = COLOR_WHITE, onclick = () => { }) => {
    const icons = {
        Dashboard: House,
        Mailbox: Mail,
        StartInterview: Users,
        TaskManager: Layers,
        CampaignManagement: AirPlane,
        ClientManagement: User,
        Utilities: Folder,
        Bell: Bell,
        Message: MessageCircle,
        ArrowDown: ChevronDown,
        ArrowLeft: ChevronLeft,
        ThumbsUp: ThumbsUp
    };

    const IconComponent = icons[name];

    return IconComponent ?
        <div onClick={onclick}>
            <IconComponent size={size} color={color} />
        </div>
        : null;
};
