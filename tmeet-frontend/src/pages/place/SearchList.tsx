import {useEffect, useState} from "react";
import axios from "axios";
import Search from "../../dto/Search";
import * as React from "react";
import {Card, CardActionArea, CardContent, Chip, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";


const SearchList: React.FC = () => {
    const [searchList, setSearchList] = useState<Array<Search>>([]);

    useEffect(() => {
        getSearchList();
    }, []);

    const getSearchList = async () => {
        const res  = await axios.get('/api/search-subway/서울지방병무청');
        setSearchList(res.data.data);
    }

    return (
        <div>
            {Array.from(Array(searchList.length)).map((_, index) => (
                <Grid item xs={2} sm={6} md={6} key={index}>
                    <Card style={{marginBottom:"10px"}}>
                        <CardActionArea
                            href={searchList[index].link}
                        >
                        <CardContent>
                            <Typography>{searchList[index].title}</Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </div>
    );
};

export default SearchList;