import Link from 'next/link';
import { getIcon } from './icons';

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
};

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


export const menuItems = [
    { key: PATH_KEYS.DASHBOARD, icon: getIcon("Dashboard"), label: <Link href={ROUTES.DASHBOARD} >Dashboard </Link>, path: ROUTES.DASHBOARD },
    { key: PATH_KEYS.MAILBOX, icon: getIcon("Mailbox"), label: <Link href={ROUTES.MAILBOX}>Mailbox</Link>, path: ROUTES.MAILBOX },
    { key: PATH_KEYS.START_INTERVIEW, icon: getIcon("StartInterview"), label: 'Start Interview', path: ROUTES.START_INTERVIEW },
    {
        key: PATH_KEYS.TASK_MANAGER,
        icon: getIcon("TaskManager"),
        label: 'Task Manager',
        children: [
            { key: PATH_KEYS.OUTBOX, label: 'Outbox', path: ROUTES.OUTBOX },
            { key: PATH_KEYS.APPOINTMENT_DAIRY, label: 'Appointment Dairy', path: ROUTES.APPOINTMENT_DAIRY },
            { key: PATH_KEYS.DEPOSIT_BUCK, label: 'Deposit Buck', path: ROUTES.DEPOSIT_BUCK },
            { key: PATH_KEYS.SMS_NON_RESPONDENTS, label: 'SMS Non-Respondents', path: ROUTES.SMS_NON_RESPONDENTS },
            { key: PATH_KEYS.LONELY_HEARTS, label: 'Lonely Hearts', path: ROUTES.LONELY_HEARTS },
            { key: PATH_KEYS.INCOMPLETE_PROFILE, label: 'Incomplete Profile', path: ROUTES.INCOMPLETE_PROFILE },
        ],
        path: ROUTES.TASK_MANAGER
    },
    {
        key: PATH_KEYS.CAMPAIGN_MANAGEMENT,
        icon: getIcon("CampaignManagement"),
        label: 'Campaign Management',
        children: [
            { key: PATH_KEYS.TELEMARKETING, label: <Link href={ROUTES.TELEMARKETING}>Telemarketing</Link>, path: ROUTES.TELEMARKETING },
            { key: PATH_KEYS.ADVERTISEMENT, label: 'Advertisement', path: ROUTES.ADVERTISEMENT },
            { key: PATH_KEYS.BUZZ_MANAGER, label: 'Buzz Manager', path: ROUTES.BUZZ_MANAGER },
            { key: PATH_KEYS.SEND_SMS, label: 'Send SMS', path: ROUTES.SEND_SMS },
        ],
        path: ROUTES.CAMPAIGN_MANAGEMENT
    },
    {
        key: PATH_KEYS.CLIENT_MANAGEMENT,
        icon: getIcon("ClientManagement"),
        label: 'Client Management',
        children: [
            { key: PATH_KEYS.VIEW_CLIENTS, label: 'View Clients', path: ROUTES.VIEW_CLIENTS },
            { key: PATH_KEYS.INTRODUCTION, label: 'Introduction', path: ROUTES.INTRODUCTION },
            { key: PATH_KEYS.PHOTOGRAPHER, label: 'Photographer', path: ROUTES.PHOTOGRAPHER },
        ],
        path: ROUTES.CLIENT_MANAGEMENT
    },
    {
        key: PATH_KEYS.UTILITIES,
        icon: getIcon("Utilities"),
        label: 'Utilities',
        children: [
            { key: PATH_KEYS.STORAGE, label: 'Storage', path: ROUTES.STORAGE },
            { key: PATH_KEYS.RECEIPTS_MANAGER, label: 'Receipts Manager', path: ROUTES.RECEIPTS_MANAGER },
            { key: PATH_KEYS.ISSUES_MANAGEMENT, label: 'Issues Management', path: ROUTES.ISSUES_MANAGEMENT },
            { key: PATH_KEYS.NON_CONFORMANCE, label: 'Non Conformance', path: ROUTES.NON_CONFORMANCE },
        ],
        path: ROUTES.UTILITIES
    },
];
