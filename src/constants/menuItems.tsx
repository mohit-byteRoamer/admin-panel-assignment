import Link from 'next/link';
import { MENU_ITEM_TYPE } from './types';
import { AirPlane, Folder, House, Layers, Mail, User, Users } from '@deemlol/next-icons';
import { COLOR_WHITE } from './colors';


export const ROUTES = {
    DASHBOARD: "/",
    MAILBOX: "/mailbox",
    START_INTERVIEW: "/startInterview",

    TASK_MANAGER: "/taskManager",
    OUTBOX: "/taskManager/outbox",
    APPOINTMENT_DAIRY: "/taskManager/appointmentDairy",
    DEPOSIT_BUCK: "/taskManager/depositBuck",
    SMS_NON_RESPONDENTS: "/taskManager/smsNonRespondents",
    LONELY_HEARTS: "/taskManager/lonelyHearts",
    INCOMPLETE_PROFILE: "/taskManager/incompleteProfile",

    CAMPAIGN_MANAGEMENT: "/campaignManagement",
    TELEMARKETING: "/campaignManagement/telemarketing",
    ADVERTISEMENT: "/campaignManagement/advertisement",
    BUZZ_MANAGER: "/campaignManagement/buzzManager",
    SEND_SMS: "/campaignManagement/sendSms",

    CLIENT_MANAGEMENT: "/clientManagement",
    VIEW_CLIENTS: "/clientManagement/viewClients",
    INTRODUCTION: "/clientManagement/introduction",
    PHOTOGRAPHER: "/clientManagement/photographer",

    UTILITIES: "/utilities",
    STORAGE: "/utilities/storage",
    RECEIPTS_MANAGER: "/utilities/receiptsManager",
    ISSUES_MANAGEMENT: "/utilities/issuesManagement",
    NON_CONFORMANCE: "/utilities/nonConformance",
} as const;


export const PATH_KEYS = {
    DASHBOARD: "1",
    MAILBOX: "2",
    START_INTERVIEW: "3",

    TASK_MANAGER: "4",
    OUTBOX: "4-1",
    APPOINTMENT_DAIRY: "4-2",
    DEPOSIT_BUCK: "4-3",
    SMS_NON_RESPONDENTS: "4-4",
    LONELY_HEARTS: "4-5",
    INCOMPLETE_PROFILE: "4-6",

    CAMPAIGN_MANAGEMENT: "5",
    TELEMARKETING: "5-1",
    ADVERTISEMENT: "5-2",
    BUZZ_MANAGER: "5-3",
    SEND_SMS: "5-4",

    CLIENT_MANAGEMENT: "6",
    VIEW_CLIENTS: "6-1",
    INTRODUCTION: "6-2",
    PHOTOGRAPHER: "6-3",

    UTILITIES: "7",
    STORAGE: "7-1",
    RECEIPTS_MANAGER: "7-2",
    ISSUES_MANAGEMENT: "7-3",
    NON_CONFORMANCE: "7-4",
};

export const MENU_ITEMS: MENU_ITEM_TYPE[] = [
    { key: PATH_KEYS.DASHBOARD, icon: <House size={18} color={COLOR_WHITE} />, label: <Link href={ROUTES.DASHBOARD} >Dashboard </Link>, path: ROUTES.DASHBOARD },
    { key: PATH_KEYS.MAILBOX, icon: <Mail size={18} color={COLOR_WHITE} />, label: <Link href={ROUTES.MAILBOX}>Mailbox</Link>, path: ROUTES.MAILBOX },
    { key: PATH_KEYS.START_INTERVIEW, icon: <Users size={18} color={COLOR_WHITE} />, label: <Link href={ROUTES.START_INTERVIEW}>Start Interview</Link>, path: ROUTES.START_INTERVIEW },
    {
        key: PATH_KEYS.TASK_MANAGER,
        icon: <Layers size={18} color={COLOR_WHITE} />,
        label: "Task Manager",
        children: [
            { key: PATH_KEYS.OUTBOX, label: <Link href={ROUTES.OUTBOX}>Outbox</Link>, path: ROUTES.OUTBOX },
            { key: PATH_KEYS.APPOINTMENT_DAIRY, label: <Link href={ROUTES.APPOINTMENT_DAIRY}>Appointment Dairy</Link>, path: ROUTES.APPOINTMENT_DAIRY },
            { key: PATH_KEYS.DEPOSIT_BUCK, label: <Link href={ROUTES.DEPOSIT_BUCK}>Deposit Buck</Link>, path: ROUTES.DEPOSIT_BUCK },
            { key: PATH_KEYS.SMS_NON_RESPONDENTS, label: <Link href={ROUTES.SMS_NON_RESPONDENTS}>SMS Non-Respondents</Link>, path: ROUTES.SMS_NON_RESPONDENTS },
            { key: PATH_KEYS.LONELY_HEARTS, label: <Link href={ROUTES.LONELY_HEARTS}>Lonely Hearts</Link>, path: ROUTES.LONELY_HEARTS },
            { key: PATH_KEYS.INCOMPLETE_PROFILE, label: <Link href={ROUTES.INCOMPLETE_PROFILE}>Incomplete Profile</Link>, path: ROUTES.INCOMPLETE_PROFILE },
        ],
        path: ROUTES.TASK_MANAGER
    },
    {
        key: PATH_KEYS.CAMPAIGN_MANAGEMENT,
        icon: <AirPlane size={18} color={COLOR_WHITE} />,
        label: "Campaign Management",
        children: [
            { key: PATH_KEYS.TELEMARKETING, label: <Link href={ROUTES.TELEMARKETING}>Telemarketing</Link>, path: ROUTES.TELEMARKETING },
            { key: PATH_KEYS.ADVERTISEMENT, label: <Link href={ROUTES.ADVERTISEMENT}>Advertisement</Link>, path: ROUTES.ADVERTISEMENT },
            { key: PATH_KEYS.BUZZ_MANAGER, label: <Link href={ROUTES.BUZZ_MANAGER}>Buzz Manager</Link>, path: ROUTES.BUZZ_MANAGER },
            { key: PATH_KEYS.SEND_SMS, label: <Link href={ROUTES.SEND_SMS}>Send SMS</Link>, path: ROUTES.SEND_SMS },
        ],
        path: ROUTES.CAMPAIGN_MANAGEMENT
    },
    {
        key: PATH_KEYS.CLIENT_MANAGEMENT,
        icon: <User size={18} color={COLOR_WHITE} />,
        label: "Client Management",
        children: [
            { key: PATH_KEYS.VIEW_CLIENTS, label: <Link href={ROUTES.VIEW_CLIENTS}>View Clients</Link>, path: ROUTES.VIEW_CLIENTS },
            { key: PATH_KEYS.INTRODUCTION, label: <Link href={ROUTES.INTRODUCTION}>Introduction</Link>, path: ROUTES.INTRODUCTION },
            { key: PATH_KEYS.PHOTOGRAPHER, label: <Link href={ROUTES.PHOTOGRAPHER}>Photographer</Link>, path: ROUTES.PHOTOGRAPHER },
        ],
        path: ROUTES.CLIENT_MANAGEMENT
    },
    {
        key: PATH_KEYS.UTILITIES,
        icon: <Folder size={18} color={COLOR_WHITE} />,
        label: "Utilities",
        children: [
            { key: PATH_KEYS.STORAGE, label: <Link href={ROUTES.STORAGE}>Storage</Link>, path: ROUTES.STORAGE },
            { key: PATH_KEYS.RECEIPTS_MANAGER, label: <Link href={ROUTES.RECEIPTS_MANAGER}>Receipts Manager</Link>, path: ROUTES.RECEIPTS_MANAGER },
            { key: PATH_KEYS.ISSUES_MANAGEMENT, label: <Link href={ROUTES.ISSUES_MANAGEMENT}>Issues Management</Link>, path: ROUTES.ISSUES_MANAGEMENT },
            { key: PATH_KEYS.NON_CONFORMANCE, label: <Link href={ROUTES.NON_CONFORMANCE}>Non Conformance</Link>, path: ROUTES.NON_CONFORMANCE },
        ],
        path: ROUTES.UTILITIES
    },
];
