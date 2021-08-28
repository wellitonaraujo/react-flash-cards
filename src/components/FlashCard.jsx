import { useState } from "react"

export default function FlashCard({ title = "Título do Card", description = "Descrição do Card" }){
    const [ showTitle, setShowTitle] = useState(false)

    function handleCardClick() {
        // setShowTitle(!showTitle); Tbm funciona
        setShowTitle(currentShowTitle => !currentShowTitle);
    }

    //Verifica se o texto do card estoura o os limites do card
    const fontSizeClassName = showTitle ? 'text-xl' : 'text-sd';
    return(
        <div className= {`shadow-lg p-4 w-90 h-45 
                        flex flex-row
                        cursor-pointer
                        items-center 
                        justify-center 
                        font-semibold
                        ${fontSizeClassName}`}
         onClick={handleCardClick}
        >
         {showTitle ? title : description}               
        </div>
    )
}