import '../styles/Square.css'

export const Square = ({img, click}) => {

    return(
        <div className='Square' onClick={click}>{img}</div>
    )
    
}