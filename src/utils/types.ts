export type FlashCardProps = {
    user_id: string,
    flashCard_id : string,
    flashCardTitle : string
}
export type FlashCardCellProps = {
    flashCardTitle : string,
    flashCard_id : string
}

export type RootStackParamList  = {
    FlashCard : FlashCardCellProps
}




