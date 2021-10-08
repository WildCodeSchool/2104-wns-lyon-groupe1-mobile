
export type FlashCardCellProps = {
    flashCard_id : string
    flashCardTitle : string,
    flashCardTags : string[],
    flashCardRessources : Ressource[]
    subtitles: Subtitle[]
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

export type Ressource  = {
    name : string,
    url : string
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
    title : string
    paragraphs : Paragraph[]
}
//=============================================================

export interface iRessourceSectionProps {
    ressources : Ressource[];
}

//=============================================================
export interface IErrorMessagePorps {
    errorText: string,
    isVisible : boolean,
    callback : any
}

//=============================================================
export interface ILoginData{
    emailInput : string,
    passwordInput : string
}






