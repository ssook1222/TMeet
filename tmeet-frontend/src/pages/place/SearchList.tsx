import {useEffect, useState} from "react";
import axios from "axios";
import Search from "../../dto/Search";
import * as React from "react";


const SearchList: React.FC = () => {
    const [searchList, setSearchList] = useState<Array<Search>>([]);

    useEffect(() => {
        getSearchList();
    }, []);

    const getSearchList = async () => {
        // res는 http response의 header + body를 모두 갖고 있다.
        const res  = await axios.get('/api/search-subway/서울지방병무청');
        setSearchList(res.data);
    }

    console.log(searchList)

    return (
        <div>
            {
                searchList.map((search : Search)=>{
                    {search.title}
                })
            }
        </div>
    );
};

export default SearchList;