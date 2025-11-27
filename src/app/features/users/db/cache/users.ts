import { getGlobalTag, getIdTag } from "@/lib/dataCache";

export function getUserGlobalTag() {
    return getGlobalTag("users");
}

export function getUserIdTag(id: string) {
    return getIdTag("users", id);
}

export function revalidateUserCache(id: string) {
    revalidateUserCache(getUserGlobalTag());
    revalidateUserCache(getUserIdTag(id));
}