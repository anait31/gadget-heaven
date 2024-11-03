import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {

    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    categories.map(category => <div className="font-bold mb-2  bg-gray-100 py-2 rounded-lg" key={category.category_id}>
                        <NavLink to={`/category/${category.category_name}`} role="tab" className="tab">{category.category_name}</NavLink>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;