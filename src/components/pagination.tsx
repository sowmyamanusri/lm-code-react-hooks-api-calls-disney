

const Pagination : React.FC<{currentPage : number, setCurrentPage:(page: number) => void}> =
({currentPage,setCurrentPage})=>{
    const nextPage = ()=>{
        const newPageNumber = currentPage + 1;
        setCurrentPage(newPageNumber);
    }
    const previousPage =()=>{
     if(currentPage >1){
         const newPageNumber = currentPage - 1;
         setCurrentPage(newPageNumber);
     }
    }
    return(
        <>
        <div className="pagination">
        <div className="pagination__item">
            <button className="pagination__btn" onClick ={previousPage}>Prev </button>
        </div>
        <div className="pagination__item">
            <button className="pagination__btn" onClick ={nextPage}>Next </button>
        </div>

        </div>
        </>
    )

}

export default Pagination;