import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import LevelButton from './LevelButton';
import { Link } from 'react-router-dom';
// import preval from 'preval.macro'

const levels = [
  {
    title: 'Positive',
    image: 'level-1.webp',
    level: 'easy',
    freeStyle: 'false',
    name: 'positive',
    url: 'level1',
  },
  {
    title: 'Negative',
    image: 'level-3.webp',
    level: 'easy',
    freeStyle: 'false',
    name: 'negative',
    url: 'level2',
  },
  {
    title: 'Fractions',
    image: 'level-2.webp',
    level: 'hard',
    freeStyle: 'false',
    name: 'fractions',
    url: 'level3',
  },
  {
    title: 'Negative and Fractions',
    image: 'level-4.webp',
    level: 'hard',
    freeStyle: 'false',
    name: 'negative-fractions',
    url: 'level4',
  },
  {
    title: 'Free Style',
    image: 'level-5.webp',
    level: 'hard',
    freeStyle: 'true',
    name: 'negative-fractions',
    url: 'level5',
  },
];

function Start() {
  return (
    <Grid
      id="start"
      style={{ maxWidth: 800, margin: 'auto' }}
      direction="column"
      container
      justifyContent="center"
    >
      <Grid direction="column" container item alignItems="center">
        <img
          src={process.env.PUBLIC_URL + '/logo.svg'}
          alt="logo"
          style={{ width: 250 }}
        ></img>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid
        item
        container
        style={{ marginTop: 20 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {levels.map((e, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            style={{ padding: 8, paddingTop: 0 }}
          >
            <Link
              to={{
                pathname: `/${e.url}`,
                // state: {
                //     level: e.level,
                //     freeStyle:e.freeStyle,
                //     // name: e.name,
                // }
              }}
            >
              <LevelButton image={e.image} title={e.title} />
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* Build Date: {preval`module.exports = new Date().toLocaleString();`}    */}
    </Grid>
  );
}

export default Start;
