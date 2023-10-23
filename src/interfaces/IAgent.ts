import { IAbility } from "./IAbility"

export interface IAgent {
    uuid: string,
    displayName: string,
    description: string,
    fullPortraitV2: string,
    backgroundGradientColors: string[],
    role: {
        uuid: string,
        displayName: string,
        description: string,
        displayIcon: string
    },
    abilities: IAbility[]
}