import Divider from "./basics/Divider";
import CategoryList from "./category/CategoryList";
import FilterPage from "./filters/FilterPage";
export default function HomePage() {

    return (
        <>
            <CategoryList />
            {/* <Divider /> */}
            <FilterPage onApplyFilters={() => {} } />
        </>
    )
}