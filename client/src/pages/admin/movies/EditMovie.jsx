import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminMovieForm } from "../../../components/forms/AdminMovieForm";

export function AdminEditMoviePage() {
    const movie = {
        img: '/vite.svg',
        title: 'Action',
        url: 'action',
        description: 'Very action, much movie',
        duration: 122,
        categoryId: 1,
        releaseDate: '2025-06-07',
        rating: 46,
        status: 'published',
    };

    return (
        <main>
            <AdminPageTitle title="Edit movie" />

            <div className="container">
                <div className="row">
                    <AdminMovieForm movie={movie} />
                </div>
            </div>
        </main>
    );
}