export default function FlashCards({ children: flahcards}) {
    return(
        <div className="border p2
                        flex flex-row
                        items-center
                        justify-center
                        flex-wrap
                        ">

        {flahcards}
        </div>
    )
}