import {useSearchParams} from "react-router";

function PostsFilter() {

    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const query = form.search.value;

        setSearchParams({post: query});
    }

    return (
        <form autoComplete="false"
              className={"post-filter-form"}
              onSubmit={handleSubmit}>
            <input type={"search"}
                   name={"search"}
                   defaultValue={searchParams.get("post") || ""}/>
            <button type={"submit"}>Search</button>
        </form>
    )
}

export {PostsFilter};
