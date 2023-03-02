const { LineWave } = require("react-loader-spinner");
const { useSelector } = require("react-redux")
const { selectIsLoading, selectError } = require("redux/tasks/cont-selectors")

const Spinner = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
      <>
        {error && <h1>An error occured while rendering your card</h1>}
        {isLoading && !error && (
          <LineWave
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        )}
      </>
    );
}

export default Spinner
