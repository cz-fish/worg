import React from 'react';
import {Input} from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

const onSearch = (what)=> {
    console.log(what);
};

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <Search placeholder="search by tag" onSearch={onSearch} enterButton size="large"/>
            </div>
        );
    }
}

export default SearchBar;
  