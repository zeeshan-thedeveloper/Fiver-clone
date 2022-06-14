import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import defaultChatMsgStyles from '@mui-treasury/styles/chatMsg/default';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile,faDownload,faFileImage} from '@fortawesome/free-solid-svg-icons';
import { Button, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    container:{
        marginTop:'1%'
    },
    imageHolder:{
        width:'100%',
        height:200
    },
    fileHolder:{
        // backgroundColor:'blue',
        width:'90%',height:50,
        boxShadow: "2px 2px 4px #9E9E9E",
        borderRadius:10
    }
}))
const MessageHolderForMobile = withStyles(defaultChatMsgStyles, { name: 'ChatMsg' })(props => {
    const styles = useStyles();
    const {
      classes,
      avatar,
      messages,
      side,
      GridContainerProps,
      GridItemProps,
      AvatarProps,
      getTypographyProps,
      isImage,
      isVideo,
      isFile,
      images,
      videos,
      files,
      isLeft
    } = props;
    const attachClass = index => {
      if (index === 0) {
        return classes[`${side}First`];
      }
      if (index === messages.length - 1) {
        return classes[`${side}Last`];
      }
      return '';
    };

    return (
      <Grid
        container
        spacing={0}
        justify={side === 'right' ? 'flex-end' : 'flex-start'}
        {...GridContainerProps}
        className={styles.container}
      >
        {(side === 'left' && !isFile && !isImage && !isVideo) && (
          <Grid item {...GridItemProps}>
            <Avatar
              src={avatar}
              {...AvatarProps}
              className={cx(classes.avatar, AvatarProps.className)}
            />
          </Grid>
        )}

        <Grid item xs={8}>
          { (!isFile && !isImage && !isVideo) && messages.map((msg, i) => {

            const TypographyProps = getTypographyProps(msg, i, props);

            return (
              // eslint-disable-next-line react/no-array-index-key

              <div key={msg.id || i} className={classes[`${side}Row`]}>
                <Typography
                  align={'left'}
                  {...TypographyProps}
                  className={cx(
                    classes.msg,
                    classes[side],
                    attachClass(i),
                    TypographyProps.className
                  )}
                >
                  {msg}
                </Typography>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={8}>
          { (!isFile && isImage && !isVideo) && images.map((img, i) => {

            // const TypographyProps = getTypographyProps(msg, i, props);

            return (
              // eslint-disable-next-line react/no-array-index-key

              <div key={img.id || i} className={classes[`${side}Row`]}>
                {/* <Typography
                  align={'left'}
                  {...TypographyProps}
                  className={cx(
                    classes.msg,
                    classes[side],
                    attachClass(i),
                    TypographyProps.className
                  )}
                >
                  <img src={msg} className={styles.imageHolder} />
                  <Button variant="secondary">Download</Button>


                </Typography> */}

                <div className={styles.fileHolder} style={{marginLeft:(isLeft) ? "0%" : "8%"}}>
                    <Grid  container>

                    <Grid item xs={2} style={{textAlign:'center'}}>
                        {/* Icon */}
                        <FontAwesomeIcon icon={faFileImage  } size="1x" style={{marginTop:"45%"}} />
                    </Grid>
                    <Grid item xs={8} style={{textAlign:'left',paddingLeft:1}}>
                        {/* Icon */}
                        <p>{img.imageTitle}</p>
                    </Grid>
                    <Grid item xs={2} style={{textAlign:'center'}}>
                        {/* Icon */}
                        <FontAwesomeIcon icon={faDownload} size="1x" style={{marginTop:'45%'}} />
                    </Grid>
                    </Grid>
                    
                </div>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={8}>
          { (isFile && !isImage && !isVideo) && files.map((file, i) => {

            // const TypographyProps = getTypographyProps(msg, i, props);

            return (
              // eslint-disable-next-line react/no-array-index-key

              <div key={file.id || i} className={classes[`${side}Row`]}>
                <div className={styles.fileHolder} style={{marginLeft:(isLeft) ? "0%" : "8%"}}>
                    <Grid  container>

                    <Grid item xs={2} style={{textAlign:'center'}}>
                        {/* Icon */}
                        <FontAwesomeIcon icon={faFile} size="1x" style={{marginTop:'45%'}} />
                    </Grid>
                    <Grid item xs={8} style={{textAlign:'left',paddingLeft:1}}>
                        {/* Icon */}
                        <p>{file.fileName}</p>
                    </Grid>
                    <Grid item xs={2} style={{textAlign:'center'}}>
                        {/* Icon */}
                        <FontAwesomeIcon icon={faDownload} size="1x" style={{marginTop:'45%'}} />
                    </Grid>
                    </Grid>
                    
                </div>
              </div>
            );
          })}
        </Grid>
      </Grid>
    );
  });
  MessageHolderForMobile.propTypes = {
    avatar: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.object),
    videos: PropTypes.arrayOf(PropTypes.string),
    files: PropTypes.arrayOf(PropTypes.object),
    side: PropTypes.oneOf(['left', 'right']),
    isLeft:PropTypes.bool,
    isFile: PropTypes.bool,
    isImage: PropTypes.bool,
    isVideo: PropTypes.bool,
    GridContainerProps: PropTypes.shape({}),
    GridItemProps: PropTypes.shape({}),
    AvatarProps: PropTypes.shape({}),
    getTypographyProps: PropTypes.func,
  };
  MessageHolderForMobile.defaultProps = {
    avatar: '',
    messages: [],
    images:[{}],
    videos:[],
    files:[{}],
    isLeft:false,
    side: 'left',
    isVideo:false,
    isImage:false,
    isFile:false,
    GridContainerProps: {},
    GridItemProps: {},
    AvatarProps: {},
    getTypographyProps: () => ({}),
  };
  
  export default MessageHolderForMobile;