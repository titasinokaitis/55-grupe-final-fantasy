import { Link } from 'react-router';

export function CategoriesPage() {
    const categoriesData = [
        {
            title: 'Action',
            description: 'Lorem ipsum dolor sit amet.',
            moviesCount: 7,
            urlSlug: 'action',
        },
        {
            title: 'Crime',
            description: 'Very lorem ipsum very dolor sit amet.',
            moviesCount: 66,
            urlSlug: 'crime',
        },
    ];

    return (
        <main>
            <div className="container">
                <div className="row">
                    <h1 className="col-12 display-1 mb-5">Categories</h1>
                </div>
            </div>

            <div className="container px-4 py-5" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {
                        categoriesData.map(category => (
                            <div className="feature col my-4">
                                <h3 className="fs-2 text-body-emphasis">{category.title}</h3>
                                <p>{category.description}</p>
                                <p>Movies count: {category.moviesCount}</p>
                                <Link to={'/categories/' + category.urlSlug} className="icon-link">Read more</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}