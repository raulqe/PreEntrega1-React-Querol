

export const ItemListContainer=({mesage,logo})=>{

return(
    <>
    <h1 className="GreetingTitle d-flex justify-content-center text-align-center align-items-center ">
    <img  className="logoTitle me-2"src={logo} alt=""/> 
        {mesage}
        <img  className="logoTitle ms-2"src={logo} alt=""/>
    </h1> 
    </>
);
}