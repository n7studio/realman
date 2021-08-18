import { RoundStatuses } from "../../enums/RoundStatuses";
import { VoteStatuses } from "../../enums/VoteStatuses";


export interface Round {
    letter: string|null,
    status: RoundStatuses.IN_PROGRESS | RoundStatuses.STOPPED
    categories: {
        [category: string]: {
            [player: string]: {
                value: string
                isDirty: boolean
                isActive: boolean
                vote: { [player: string]: VoteStatuses.ACCEPTED | VoteStatuses.REJECTED }
            }
        }
    }
}