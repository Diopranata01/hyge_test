import { useRouter } from "next/router";

const DetailPortofolioPage = () => {
    const { query } = useRouter();
    return (
        <div>
            Detail Portofolio Page
            <p>id : {query.id}</p>
        </div>
    )
}

export default DetailPortofolioPage;