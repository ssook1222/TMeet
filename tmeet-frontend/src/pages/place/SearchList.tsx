import {useEffect, useState} from "react";
import axios from "axios";
import Search from "../../dto/Search";


const SearchList: React.FC = () => {
    const [searchList, setSearchList] = useState<Array<Search>>([]);

    useEffect(() => {
        getSearchList();
    }, []);

    const getSearchList = async () => {
        // res는 http response의 header + body를 모두 갖고 있다.
        const res  = await axios.get('/api/search-subway');
        console.log(res);
        setSearchList(res.data);
    }

    return (
        <div>

        </div>
    );
};

export default SearchList;