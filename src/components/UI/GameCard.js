import React, { memo, useEffect } from 'react';
import {
  Card,
  CardCover,
  CardContent,
  Typography,
  Grid,
  Sheet,
  Link as JoyLink
} from '@mui/joy';
import { styled } from '@mui/joy/styles';

import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import {
  validateGenres,
  validateGameWebsiteUrl,
  validateDate
} from '../../helpers/utils';

import ErrorFallback from '../ErrorFallback';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
  background: '#292929',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  width: '100%'
}));

function GameCard({ cardInfo }) {
  const { released, website, rating, genres, background_image, name, slug } =
    cardInfo;

  const navigate = useNavigate()

  const genresStr = validateGenres(genres);
  const websiteValidatedStr = validateGameWebsiteUrl(website);
  const dateStr = validateDate(released);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card sx={{ minHeight: '420px', width: 340, cursor: 'pointer' }} onClick={() => navigate('game/' + slug)}>
          <CardCover sx={{ overflow: 'hidden' }}>
            <img src={background_image} loading="lazy" alt={name} />
          </CardCover>
          <CardCover
            sx={{
              background:
                'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 350px)'
            }}
          />
          <CardContent sx={{ justifyContent: 'flex-end' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ width: '100%' }}
            >
              <Grid xs={6}>
                <Item>
                  <DateRangeOutlinedIcon />
                  <Typography sx={{ color: '#E4E4E4', marginLeft: '.5rem' }}>
                    {dateStr}
                  </Typography>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <PageviewOutlinedIcon />
                  <Typography noWrap>
                    <JoyLink
                      disabled={false}
                      level="body1"
                      underline="hover"
                      variant="none"
                      href={website}
                      target="_blank"
                      rel="noopener"
                      sx={{ color: '#E4E4E4' }}
                    >
                      {websiteValidatedStr}
                    </JoyLink>
                  </Typography>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <GradeOutlinedIcon />
                  <Typography sx={{ color: '#E4E4E4', marginLeft: '.5rem' }}>
                    {rating}
                  </Typography>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <GamepadOutlinedIcon />
                  <Typography
                    noWrap
                    sx={{ color: '#E4E4E4', marginLeft: '.5rem' }}
                  >
                    {genresStr}
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </ErrorBoundary>
  );
}

export default memo(GameCard);
