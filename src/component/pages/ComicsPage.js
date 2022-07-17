  import AppComics from "../appComics/AppComics";
  import ErrorBoundary from "../errorBoundary/ErrorBoundary";

  const ComicsPage = () => {
    return(
        <>
            <ErrorBoundary><AppComics/></ErrorBoundary>
            <footer>
            </footer>
        </>
    )
  }

  export default ComicsPage;