type Cachetag = 
    | "users"
    | "organisations"
    | "jobListing"
    | "userNotificationSettings"
    | "userResumes"
    | "jobListingApplications"
    | "organisationUserSettings";

    export function getGlobalTag(tag: Cachetag) {
        return `global:${tag}` as const
    }
    export function getIdTag(tag: Cachetag, id: string) {
        return `id:${id}-${tag}` as const
    }