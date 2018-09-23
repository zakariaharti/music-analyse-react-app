import * as React from 'react';
import { FaSearch } from 'react-icons/fa';

interface ISearchPropType{
  keyword: string;
  onChange: (event: React.SyntheticEvent) => void;
  onSubmit ?: () => void;
}

class Search extends React.Component<ISearchPropType,{}>{

  public onChange = (event: React.SyntheticEvent) => {
    this.props.onChange(event);
  }

  public render(){
    return (
      <form onSubmit={this.props.onSubmit}>
         <input
           type="text"
           placeholder="type album name.."
           value={this.props.keyword}
           onChange={this.onChange}
         />
         <FaSearch className="search-icon" />
      </form>
    )
  }
}

export default Search;
