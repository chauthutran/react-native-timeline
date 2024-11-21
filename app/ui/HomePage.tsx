import Divider from "./basics/Divider";
import CategoryList from "./category/CategoryList";
import FilterPage from "./filters/FilterPage";
import OrgUnitList from "./filters/OrgUnitSelector";

export default function HomePage() {

    return (
        <>
            <CategoryList />
            {/* <hr className="border-t border-gray-400 my-4" /> */}
            <Divider />
            <FilterPage onApplyFilters={() => {} } />
        </>
    )
}