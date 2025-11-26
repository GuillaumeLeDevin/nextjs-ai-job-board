type Cachetag = 
    | "users"
    | "organisations"
    | "jobListing"
    | "userNotificationSettings"
    | "userResumes"
    | "jobListingApplications"
    | "organisationUserSettings";

    export function getGlobalTag(tag: Cachetag) {
        return `global-${tag}`;
    }