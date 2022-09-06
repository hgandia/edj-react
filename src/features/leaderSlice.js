import { CHURCHLEADERS } from "../app/shared/CHURCHLEADERS";

export const selectAllLeaders = () => {
    return CHURCHLEADERS;
}

export const selectLeaderById = () => {
    return CHURCHLEADERS.find((leader => leader.id ))
}