
export type FlashCardCellProps = {
    flashCard_id : string
    flashCardTitle : string,
}

//=============================================================
export type Paragraph = {
    text : string
}

export type Subtitle = {
    title : string,
    position : number,
    paragraph : Paragraph[],
}

type Ressource  = {
    name : string,
    url : string,
}

export interface iFlashCard {
    _id : string,
    title  : string,
    tag : string[],
    subtitle : Subtitle[]
    ressource : Ressource[]
}
//=============================================================
export type RootStackParamList  = {
    FlashCard : FlashCardCellProps
}
//=============================================================
export interface iSubTitleSectionProps {
    title : string,
    paragraphs : Paragraph[]
}
//=============================================================







