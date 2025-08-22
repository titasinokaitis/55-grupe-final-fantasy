import { useParams } from 'react-router';
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { useContext } from 'react';
import { CategoriesContext } from '../../../context/categories/CategoriesContext';
import { AdminViewCategoryTable } from '../../../components/AdminViewCategoryTable';
import { AdminMoviesTable } from '../../../components/admin-movies-table/AdminMoviesTable';
import { MoviesContext } from '../../../context/movies/MoviesContext';

export function AdminViewCategoryPage() {
    const { getAdminCategoryByUrlSlug } = useContext(CategoriesContext);
    const { adminMovies } = useContext(MoviesContext);
    const { category } = useParams();

    const categoryData = getAdminCategoryByUrlSlug(category);

    return (
        <main>
            <AdminPageTitle title={`View category: "${category}"`} />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        {
                            categoryData
                                ? (
                                    <>
                                        <AdminViewCategoryTable data={categoryData} />
                                        <AdminMoviesTable movies={adminMovies.filter(m => m.category_id === categoryData.id)} />
                                    </>
                                )
                                : <Alert text='Norima kategorija nerasta, todel jos perziureti yra neimanomas.' />
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}