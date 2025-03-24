import { PATH_KEYS, ROUTES } from "@/constants/menuItems";

export const getMenuKeyByPath = (pathname: string) => {
    const matchedKey = Object.entries(ROUTES).find(([_, path]) => path === pathname)?.[0];
    return matchedKey ? PATH_KEYS[matchedKey as keyof typeof PATH_KEYS] : undefined;
};