import { IAbility } from "./IAbility"

export interface IAgent {
    uuid: string,
    displayName: string,
    description: string,
    fullPortrait: string,
    backgroundGradientColors: string[],
    role: {
        uuid: string,
        displayName: string,
        description: string,
        displayIcon: string
    },
    abilities: IAbility[]
}