import React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';

function Search() {
  return (
    <Autocomplete
      placeholder="Search games"
      blurOnSelect="mouse"
      variant="solid"
      options={[{ label: 'The Shawshank Redemption', year: 1994 }, { label: 'Counter Strike: Global Offensive', year: 1994 }]}
    />
  );
}

export default Search;
