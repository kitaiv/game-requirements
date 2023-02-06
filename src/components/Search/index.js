import React, { useState } from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { FormControl, Container } from '@mui/joy';
import SearchTags from '../UI/SearchTags/SearchTags';
import CustomButton from '../UI/CustomButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import useWindowWidth from '../../hooks/useWindowWidth'

function Search({ handleSearch, quickTags }) {
  const [searchTerm, setSearchTerm] = useState('');
  const width = useWindowWidth()

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: '1.5rem auto'
      }}
    >
      <FormControl sx={{ width: '100%', flexDirection: 'row', gap: '.5rem' }}>
        {width < 769 ? <CustomButton text="Search" icon={<SearchOutlinedIcon />} btnStyles={{width: '25%'}}/> : null}
        <Autocomplete
          placeholder="Search games"
          blurOnSelect="mouse"
          variant="solid"
          // value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch(searchTerm);
            }
          }}
          options={[
            { label: 'The Shawshank Redemption', year: 1994 },
            { label: 'Counter Strike: Global Offensive', year: 1994 }
          ].map((option) => option.label)}
        />
      </FormControl>
      <SearchTags handleSearch={handleSearch} tags={quickTags} />
    </Container>
  );
}

export default Search;
