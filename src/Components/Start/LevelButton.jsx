import React from 'react';
import { styled } from '@mui/material/styles';
import { ButtonBase, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(() => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
// }));

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function LevelButton(props) {
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <ButtonBase
    //     focusRipple
    //     key={props.title}
    //     className={classes.image}
    //     focusVisibleClassName={classes.focusVisible}
    //     style={{
    //       width: '100%',
    //     }}
    //   >
    //     <span
    //       className={classes.imageSrc}
    //       style={{
    //         backgroundImage: `url(${process.env.PUBLIC_URL + '/' + props.image})`,
    //       }}
    //     />
    //     <span className={classes.imageBackdrop} />
    //     <span className={classes.imageButton}>
    //       <Typography
    //         component="span"
    //         variant="h5"
    //         color="inherit"
    //         className={classes.imageTitle}
    //       >
    //         {props.title}
    //         <span className={classes.imageMarked} />
    //       </Typography>
    //     </span>
    //   </ButtonBase>
    // </div>
    // <div className={classes.root}>
    <ImageButton
      focusRipple
      key={props.title}
      style={{
        width: 250,
      }}
    >
      <ImageSrc
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/' + props.image})`,
        }}
      />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="h5"
          color="inherit"
          sx={{
            position: 'relative',
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          {props.title}
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </ImageButton>
    // </div>
  );
}
